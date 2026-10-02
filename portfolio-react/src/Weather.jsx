import { useEffect, useState } from 'react'

const desc = (c) =>
  c === 0 ? ['Clear sky', '☀️'] : c <= 2 ? ['Partly cloudy', '⛅'] : c === 3 ? ['Overcast', '☁️'] :
  c <= 48 ? ['Fog', '🌫️'] : c <= 57 ? ['Drizzle', '🌦️'] : c <= 67 ? ['Rain', '🌧️'] :
  c <= 77 ? ['Snow', '❄️'] : c <= 82 ? ['Rain showers', '🌦️'] : c <= 86 ? ['Snow showers', '🌨️'] : ['Thunderstorm', '⛈️']

export default function Weather() {
  const [q, setQ] = useState('Hyderabad')
  const [data, setData] = useState(null)
  const [err, setErr] = useState('')
  const [busy, setBusy] = useState(false)

  async function load(name) {
    setBusy(true); setErr('')
    try {
      const g = await (await fetch(`https://geocoding-api.open-meteo.com/v1/search?count=1&name=${encodeURIComponent(name)}`)).json()
      if (!g.results) throw new Error(`No city found for "${name}". Check the spelling and try again.`)
      const { latitude, longitude, name: city, country } = g.results[0]
      const w = await (await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`)).json()
      setData({ place: `${city}, ${country}`, cur: w.current, day: w.daily })
    } catch (e) {
      setErr(e.message.startsWith('No city') ? e.message : 'Could not load weather. Check your connection and try again.')
    }
    setBusy(false)
  }
  useEffect(() => { load('Hyderabad') }, [])

  const submit = (e) => { e.preventDefault(); if (q.trim()) load(q.trim()) }
  const c = data && data.cur
  return (
    <div className="wx">
      <form onSubmit={submit} className="wx-search">
        <label htmlFor="city" className="sr">City</label>
        <input id="city" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search a city" />
        <button className="btn btn-primary" disabled={busy}>{busy ? 'Loading' : 'Get weather'}</button>
      </form>
      {err && <p className="wx-err" role="alert">{err}</p>}
      {data && (
        <>
          <div className="wx-now">
            <span className="wx-icon" aria-hidden="true">{desc(c.weather_code)[1]}</span>
            <div>
              <h3>{data.place}</h3>
              <p className="wx-temp">{Math.round(c.temperature_2m)}°C <span>{desc(c.weather_code)[0]}</span></p>
              <p className="muted">Feels like {Math.round(c.apparent_temperature)}°C. Humidity {c.relative_humidity_2m}%. Wind {Math.round(c.wind_speed_10m)} km/h.</p>
            </div>
          </div>
          <ul className="wx-days">
            {data.day.time.map((t, i) => (
              <li key={t}>
                <b>{i === 0 ? 'Today' : new Date(t).toLocaleDateString('en', { weekday: 'short' })}</b>
                <span aria-hidden="true">{desc(data.day.weather_code[i])[1]}</span>
                <span>{Math.round(data.day.temperature_2m_max[i])}° / {Math.round(data.day.temperature_2m_min[i])}°</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
