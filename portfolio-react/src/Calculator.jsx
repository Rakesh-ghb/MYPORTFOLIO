import { useEffect, useState } from 'react'
const OPS = { '+': (a, b) => a + b, '-': (a, b) => a - b, '×': (a, b) => a * b, '÷': (a, b) => a / b }
const fmt = (n) => (Number.isFinite(n) ? String(+n.toPrecision(12)) : 'Error')

export default function Calculator() {
  const [cur, setCur] = useState('0')
  const [prev, setPrev] = useState(null)
  const [op, setOp] = useState(null)
  const [fresh, setFresh] = useState(false)

  const clear = () => { setCur('0'); setPrev(null); setOp(null); setFresh(false) }
  const digit = (d) => {
    if (cur === 'Error' || fresh) { setCur(d === '.' ? '0.' : d); setFresh(false); return }
    if (d === '.' && cur.includes('.')) return
    setCur(cur === '0' && d !== '.' ? d : cur + d)
  }
  const choose = (o) => {
    if (cur === 'Error') return
    let left = parseFloat(cur)
    if (op && !fresh) {
      left = OPS[op](prev, left)
      if (!Number.isFinite(left)) { clear(); setCur('Error'); return }
      setCur(fmt(left))
    }
    setPrev(left); setOp(o); setFresh(true)
  }
  const equals = () => {
    if (!op || cur === 'Error') return
    const r = OPS[op](prev, parseFloat(cur))
    setCur(fmt(r)); setPrev(null); setOp(null); setFresh(true)
  }
  const back = () => { if (!fresh && cur !== 'Error') setCur(cur.length > 1 ? cur.slice(0, -1) : '0') }
  const sign = () => { if (cur !== 'Error' && cur !== '0') setCur(cur.startsWith('-') ? cur.slice(1) : '-' + cur) }
  const percent = () => { if (cur !== 'Error') setCur(fmt(parseFloat(cur) / 100)) }

  useEffect(() => {
    const onKey = (e) => {
      const k = e.key
      if (/^[0-9.]$/.test(k)) digit(k)
      else if ('+-'.includes(k)) choose(k)
      else if (k === '*') choose('×')
      else if (k === '/') { e.preventDefault(); choose('÷') }
      else if (k === 'Enter' || k === '=') { e.preventDefault(); equals() }
      else if (k === 'Backspace') back()
      else if (k === 'Escape') clear()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const keys = [
    ['AC', clear, 'fn'], ['±', sign, 'fn'], ['%', percent, 'fn'], ['÷', () => choose('÷'), 'op'],
    ['7', () => digit('7')], ['8', () => digit('8')], ['9', () => digit('9')], ['×', () => choose('×'), 'op'],
    ['4', () => digit('4')], ['5', () => digit('5')], ['6', () => digit('6')], ['-', () => choose('-'), 'op'],
    ['1', () => digit('1')], ['2', () => digit('2')], ['3', () => digit('3')], ['+', () => choose('+'), 'op'],
    ['0', () => digit('0'), 'zero'], ['.', () => digit('.')], ['=', equals, 'eq'],
  ]
  return (
    <div className="calc">
      <div className="calc-screen" aria-live="polite">
        <small>{op ? `${fmt(prev)} ${op}` : '\u00a0'}</small>
        <output>{cur}</output>
      </div>
      <div className="calc-keys">
        {keys.map(([label, fn, cls]) => (
          <button key={label} className={cls} onClick={fn} aria-label={label === '-' ? 'minus' : label}>{label}</button>
        ))}
      </div>
    </div>
  )
}
