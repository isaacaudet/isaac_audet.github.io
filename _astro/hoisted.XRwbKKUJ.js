function Kt(t, e) {
	t.indexOf(e) === -1 && t.push(e)
}
const Et = (t, e, n) => Math.min(Math.max(n, t), e),
	w = { duration: 0.3, delay: 0, endDelay: 0, repeat: 0, easing: 'ease' },
	N = (t) => typeof t == 'number',
	x = (t) => Array.isArray(t) && !N(t[0]),
	zt = (t, e, n) => {
		const r = e - t
		return ((((n - t) % r) + r) % r) + t
	}
function Yt(t, e) {
	return x(t) ? t[zt(0, t.length, e)] : t
}
const Tt = (t, e, n) => -n * t + n * e + t,
	At = () => {},
	S = (t) => t,
	tt = (t, e, n) => (e - t === 0 ? 1 : (n - t) / (e - t))
function St(t, e) {
	const n = t[t.length - 1]
	for (let r = 1; r <= e; r++) {
		const i = tt(0, e, r)
		t.push(Tt(n, 1, i))
	}
}
function Gt(t) {
	const e = [0]
	return St(e, t - 1), e
}
function Zt(t, e = Gt(t.length), n = S) {
	const r = t.length,
		i = r - e.length
	return (
		i > 0 && St(e, i),
		(s) => {
			let o = 0
			for (; o < r - 2 && !(s < e[o + 1]); o++);
			let l = Et(0, 1, tt(e[o], e[o + 1], s))
			return (l = Yt(n, o)(l)), Tt(t[o], t[o + 1], l)
		}
	)
}
const Lt = (t) => Array.isArray(t) && N(t[0]),
	G = (t) => typeof t == 'object' && !!t.createAnimation,
	O = (t) => typeof t == 'function',
	Jt = (t) => typeof t == 'string',
	_ = { ms: (t) => t * 1e3, s: (t) => t / 1e3 },
	Dt = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
	Qt = 1e-7,
	te = 12
function ee(t, e, n, r, i) {
	let s,
		o,
		l = 0
	do (o = e + (n - e) / 2), (s = Dt(o, r, i) - t), s > 0 ? (n = o) : (e = o)
	while (Math.abs(s) > Qt && ++l < te)
	return o
}
function M(t, e, n, r) {
	if (t === e && n === r) return S
	const i = (s) => ee(s, 0, 1, t, n)
	return (s) => (s === 0 || s === 1 ? s : Dt(i(s), e, r))
}
const ne =
		(t, e = 'end') =>
		(n) => {
			n = e === 'end' ? Math.min(n, 0.999) : Math.max(n, 0.001)
			const r = n * t,
				i = e === 'end' ? Math.floor(r) : Math.ceil(r)
			return Et(0, 1, i / t)
		},
	ct = {
		ease: M(0.25, 0.1, 0.25, 1),
		'ease-in': M(0.42, 0, 1, 1),
		'ease-in-out': M(0.42, 0, 0.58, 1),
		'ease-out': M(0, 0, 0.58, 1)
	},
	re = /\((.*?)\)/
function lt(t) {
	if (O(t)) return t
	if (Lt(t)) return M(...t)
	if (ct[t]) return ct[t]
	if (t.startsWith('steps')) {
		const e = re.exec(t)
		if (e) {
			const n = e[1].split(',')
			return ne(parseFloat(n[0]), n[1].trim())
		}
	}
	return S
}
class Pt {
	constructor(
		e,
		n = [0, 1],
		{
			easing: r,
			duration: i = w.duration,
			delay: s = w.delay,
			endDelay: o = w.endDelay,
			repeat: l = w.repeat,
			offset: a,
			direction: u = 'normal'
		} = {}
	) {
		if (
			((this.startTime = null),
			(this.rate = 1),
			(this.t = 0),
			(this.cancelTimestamp = null),
			(this.easing = S),
			(this.duration = 0),
			(this.totalDuration = 0),
			(this.repeat = 0),
			(this.playState = 'idle'),
			(this.finished = new Promise((f, d) => {
				;(this.resolve = f), (this.reject = d)
			})),
			(r = r || w.easing),
			G(r))
		) {
			const f = r.createAnimation(n)
			;(r = f.easing), (n = f.keyframes || n), (i = f.duration || i)
		}
		;(this.repeat = l), (this.easing = x(r) ? S : lt(r)), this.updateDuration(i)
		const c = Zt(n, a, x(r) ? r.map(lt) : S)
		;(this.tick = (f) => {
			var d
			s = s
			let p = 0
			this.pauseTime !== void 0 ? (p = this.pauseTime) : (p = (f - this.startTime) * this.rate),
				(this.t = p),
				(p /= 1e3),
				(p = Math.max(p - s, 0)),
				this.playState === 'finished' && this.pauseTime === void 0 && (p = this.totalDuration)
			const v = p / this.duration
			let h = Math.floor(v),
				m = v % 1
			!m && v >= 1 && (m = 1), m === 1 && h--
			const E = h % 2
			;(u === 'reverse' || (u === 'alternate' && E) || (u === 'alternate-reverse' && !E)) &&
				(m = 1 - m)
			const k = p >= this.totalDuration ? 1 : Math.min(m, 1),
				D = c(this.easing(k))
			e(D),
				this.pauseTime === void 0 && (this.playState === 'finished' || p >= this.totalDuration + o)
					? ((this.playState = 'finished'),
					  (d = this.resolve) === null || d === void 0 || d.call(this, D))
					: this.playState !== 'idle' && (this.frameRequestId = requestAnimationFrame(this.tick))
		}),
			this.play()
	}
	play() {
		const e = performance.now()
		;(this.playState = 'running'),
			this.pauseTime !== void 0
				? (this.startTime = e - this.pauseTime)
				: this.startTime || (this.startTime = e),
			(this.cancelTimestamp = this.startTime),
			(this.pauseTime = void 0),
			(this.frameRequestId = requestAnimationFrame(this.tick))
	}
	pause() {
		;(this.playState = 'paused'), (this.pauseTime = this.t)
	}
	finish() {
		;(this.playState = 'finished'), this.tick(0)
	}
	stop() {
		var e
		;(this.playState = 'idle'),
			this.frameRequestId !== void 0 && cancelAnimationFrame(this.frameRequestId),
			(e = this.reject) === null || e === void 0 || e.call(this, !1)
	}
	cancel() {
		this.stop(), this.tick(this.cancelTimestamp)
	}
	reverse() {
		this.rate *= -1
	}
	commitStyles() {}
	updateDuration(e) {
		;(this.duration = e), (this.totalDuration = e * (this.repeat + 1))
	}
	get currentTime() {
		return this.t
	}
	set currentTime(e) {
		this.pauseTime !== void 0 || this.rate === 0
			? (this.pauseTime = e)
			: (this.startTime = performance.now() - e / this.rate)
	}
	get playbackRate() {
		return this.rate
	}
	set playbackRate(e) {
		this.rate = e
	}
}
class ie {
	setAnimation(e) {
		;(this.animation = e), e?.finished.then(() => this.clearAnimation()).catch(() => {})
	}
	clearAnimation() {
		this.animation = this.generator = void 0
	}
}
const K = new WeakMap()
function Rt(t) {
	return K.has(t) || K.set(t, { transforms: [], values: new Map() }), K.get(t)
}
function se(t, e) {
	return t.has(e) || t.set(e, new ie()), t.get(e)
}
const oe = ['', 'X', 'Y', 'Z'],
	ae = ['translate', 'scale', 'rotate', 'skew'],
	V = { x: 'translateX', y: 'translateY', z: 'translateZ' },
	ut = { syntax: '<angle>', initialValue: '0deg', toDefaultUnit: (t) => t + 'deg' },
	ce = {
		translate: {
			syntax: '<length-percentage>',
			initialValue: '0px',
			toDefaultUnit: (t) => t + 'px'
		},
		rotate: ut,
		scale: { syntax: '<number>', initialValue: 1, toDefaultUnit: S },
		skew: ut
	},
	C = new Map(),
	et = (t) => `--motion-${t}`,
	H = ['x', 'y', 'z']
ae.forEach((t) => {
	oe.forEach((e) => {
		H.push(t + e), C.set(et(t + e), ce[t])
	})
})
const le = (t, e) => H.indexOf(t) - H.indexOf(e),
	ue = new Set(H),
	xt = (t) => ue.has(t),
	de = (t, e) => {
		V[e] && (e = V[e])
		const { transforms: n } = Rt(t)
		Kt(n, e), (t.style.transform = fe(n))
	},
	fe = (t) => t.sort(le).reduce(he, '').trim(),
	he = (t, e) => `${t} ${e}(var(${et(e)}))`,
	Z = (t) => t.startsWith('--'),
	dt = new Set()
function me(t) {
	if (!dt.has(t)) {
		dt.add(t)
		try {
			const { syntax: e, initialValue: n } = C.has(t) ? C.get(t) : {}
			CSS.registerProperty({ name: t, inherits: !1, syntax: e, initialValue: n })
		} catch {}
	}
}
const z = (t, e) => document.createElement('div').animate(t, e),
	ft = {
		cssRegisterProperty: () =>
			typeof CSS < 'u' && Object.hasOwnProperty.call(CSS, 'registerProperty'),
		waapi: () => Object.hasOwnProperty.call(Element.prototype, 'animate'),
		partialKeyframes: () => {
			try {
				z({ opacity: [1] })
			} catch {
				return !1
			}
			return !0
		},
		finished: () => !!z({ opacity: [0, 1] }, { duration: 0.001 }).finished,
		linearEasing: () => {
			try {
				z({ opacity: 0 }, { easing: 'linear(0, 1)' })
			} catch {
				return !1
			}
			return !0
		}
	},
	Y = {},
	R = {}
for (const t in ft) R[t] = () => (Y[t] === void 0 && (Y[t] = ft[t]()), Y[t])
const pe = 0.015,
	ge = (t, e) => {
		let n = ''
		const r = Math.round(e / pe)
		for (let i = 0; i < r; i++) n += t(tt(0, r - 1, i)) + ', '
		return n.substring(0, n.length - 2)
	},
	ht = (t, e) => (O(t) ? (R.linearEasing() ? `linear(${ge(t, e)})` : w.easing) : Lt(t) ? ye(t) : t),
	ye = ([t, e, n, r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`
function we(t, e) {
	for (let n = 0; n < t.length; n++) t[n] === null && (t[n] = n ? t[n - 1] : e())
	return t
}
const ve = (t) => (Array.isArray(t) ? t : [t])
function J(t) {
	return V[t] && (t = V[t]), xt(t) ? et(t) : t
}
const U = {
	get: (t, e) => {
		e = J(e)
		let n = Z(e) ? t.style.getPropertyValue(e) : getComputedStyle(t)[e]
		if (!n && n !== 0) {
			const r = C.get(e)
			r && (n = r.initialValue)
		}
		return n
	},
	set: (t, e, n) => {
		;(e = J(e)), Z(e) ? t.style.setProperty(e, n) : (t.style[e] = n)
	}
}
function Ot(t, e = !0) {
	if (!(!t || t.playState === 'finished'))
		try {
			t.stop ? t.stop() : (e && t.commitStyles(), t.cancel())
		} catch {}
}
function be(t, e) {
	var n
	let r = e?.toDefaultUnit || S
	const i = t[t.length - 1]
	if (Jt(i)) {
		const s = ((n = i.match(/(-?[\d.]+)([a-z%]*)/)) === null || n === void 0 ? void 0 : n[2]) || ''
		s && (r = (o) => o + s)
	}
	return r
}
function Ee() {
	return window.__MOTION_DEV_TOOLS_RECORD
}
function Te(t, e, n, r = {}, i) {
	const s = Ee(),
		o = r.record !== !1 && s
	let l,
		{
			duration: a = w.duration,
			delay: u = w.delay,
			endDelay: c = w.endDelay,
			repeat: f = w.repeat,
			easing: d = w.easing,
			persist: p = !1,
			direction: v,
			offset: h,
			allowWebkitAcceleration: m = !1
		} = r
	const E = Rt(t),
		k = xt(e)
	let D = R.waapi()
	k && de(t, e)
	const b = J(e),
		q = se(E.values, b),
		T = C.get(b)
	return (
		Ot(q.animation, !(G(d) && q.generator) && r.record !== !1),
		() => {
			const $ = () => {
				var g, I
				return (I = (g = U.get(t, b)) !== null && g !== void 0 ? g : T?.initialValue) !== null &&
					I !== void 0
					? I
					: 0
			}
			let y = we(ve(n), $)
			const at = be(y, T)
			if (G(d)) {
				const g = d.createAnimation(y, e !== 'opacity', $, b, q)
				;(d = g.easing), (y = g.keyframes || y), (a = g.duration || a)
			}
			if (
				(Z(b) && (R.cssRegisterProperty() ? me(b) : (D = !1)),
				k && !R.linearEasing() && (O(d) || (x(d) && d.some(O))) && (D = !1),
				D)
			) {
				T && (y = y.map((L) => (N(L) ? T.toDefaultUnit(L) : L))),
					y.length === 1 && (!R.partialKeyframes() || o) && y.unshift($())
				const g = {
					delay: _.ms(u),
					duration: _.ms(a),
					endDelay: _.ms(c),
					easing: x(d) ? void 0 : ht(d, a),
					direction: v,
					iterations: f + 1,
					fill: 'both'
				}
				;(l = t.animate({ [b]: y, offset: h, easing: x(d) ? d.map((L) => ht(L, a)) : void 0 }, g)),
					l.finished ||
						(l.finished = new Promise((L, Xt) => {
							;(l.onfinish = L), (l.oncancel = Xt)
						}))
				const I = y[y.length - 1]
				l.finished
					.then(() => {
						p || (U.set(t, b, I), l.cancel())
					})
					.catch(At),
					m || (l.playbackRate = 1.000001)
			} else if (i && k)
				(y = y.map((g) => (typeof g == 'string' ? parseFloat(g) : g))),
					y.length === 1 && y.unshift(parseFloat($())),
					(l = new i(
						(g) => {
							U.set(t, b, at ? at(g) : g)
						},
						y,
						Object.assign(Object.assign({}, r), { duration: a, easing: d })
					))
			else {
				const g = y[y.length - 1]
				U.set(t, b, T && N(g) ? T.toDefaultUnit(g) : g)
			}
			return (
				o && s(t, e, y, { duration: a, delay: u, easing: d, repeat: f, offset: h }, 'motion-one'),
				q.setAnimation(l),
				l
			)
		}
	)
}
const Ae = (t, e) => (t[e] ? Object.assign(Object.assign({}, t), t[e]) : Object.assign({}, t))
function Se(t, e) {
	var n
	return (
		typeof t == 'string'
			? e
				? (((n = e[t]) !== null && n !== void 0) || (e[t] = document.querySelectorAll(t)),
				  (t = e[t]))
				: (t = document.querySelectorAll(t))
			: t instanceof Element && (t = [t]),
		Array.from(t || [])
	)
}
const Le = (t) => t(),
	kt = (t, e, n = w.duration) =>
		new Proxy({ animations: t.map(Le).filter(Boolean), duration: n, options: e }, Pe),
	De = (t) => t.animations[0],
	Pe = {
		get: (t, e) => {
			const n = De(t)
			switch (e) {
				case 'duration':
					return t.duration
				case 'currentTime':
					return _.s(n?.[e] || 0)
				case 'playbackRate':
				case 'playState':
					return n?.[e]
				case 'finished':
					return (
						t.finished || (t.finished = Promise.all(t.animations.map(Re)).catch(At)), t.finished
					)
				case 'stop':
					return () => {
						t.animations.forEach((r) => Ot(r))
					}
				case 'forEachNative':
					return (r) => {
						t.animations.forEach((i) => r(i, t))
					}
				default:
					return typeof n?.[e] > 'u' ? void 0 : () => t.animations.forEach((r) => r[e]())
			}
		},
		set: (t, e, n) => {
			switch (e) {
				case 'currentTime':
					n = _.ms(n)
				case 'playbackRate':
					for (let r = 0; r < t.animations.length; r++) t.animations[r][e] = n
					return !0
			}
			return !1
		}
	},
	Re = (t) => t.finished
function xe(t, e, n) {
	return O(t) ? t(e, n) : t
}
function Oe(t) {
	return function (n, r, i = {}) {
		n = Se(n)
		const s = n.length,
			o = []
		for (let l = 0; l < s; l++) {
			const a = n[l]
			for (const u in r) {
				const c = Ae(i, u)
				c.delay = xe(c.delay, l, s)
				const f = Te(a, u, r[u], c, t)
				o.push(f)
			}
		}
		return kt(o, i, i.duration)
	}
}
const ke = Oe(Pt)
function Ie(t, e = {}) {
	return kt(
		[
			() => {
				const n = new Pt(t, [0, 1], e)
				return n.finished.catch(() => {}), n
			}
		],
		e,
		e.duration
	)
}
function Me(t, e, n) {
	return (O(t) ? Ie : ke)(t, e, n)
}
document.addEventListener('click', (t) => {
	const e = document.getElementById('astro-header-drawer'),
		n = document.getElementById('astro-header-drawer-button')
	e?.contains(t.target) || n?.contains(t.target)
		? e?.classList.toggle('translate-x-96')
		: e?.classList.add('translate-x-96')
})
class _e extends HTMLElement {
	constructor() {
		super()
		const e = this.querySelector('button')
		e &&
			e.addEventListener('click', (n) => {
				if (n.currentTarget instanceof HTMLButtonElement) {
					let r = n.currentTarget.getAttribute('aria-pressed') === 'true',
						i = new CustomEvent('theme-change', { detail: { theme: r ? 'light' : 'dark' } })
					document.dispatchEvent(i), e.setAttribute('aria-pressed', String(!r))
				}
			})
	}
}
'customElements' in window && customElements.define('theme-toggle', _e)
const Ce = 'modulepreload',
	Fe = function (t) {
		return '/' + t
	},
	mt = {},
	qe = function (e, n, r) {
		let i = Promise.resolve()
		if (n && n.length > 0) {
			const s = document.getElementsByTagName('link')
			i = Promise.all(
				n.map((o) => {
					if (((o = Fe(o)), o in mt)) return
					mt[o] = !0
					const l = o.endsWith('.css'),
						a = l ? '[rel="stylesheet"]' : ''
					if (!!r)
						for (let f = s.length - 1; f >= 0; f--) {
							const d = s[f]
							if (d.href === o && (!l || d.rel === 'stylesheet')) return
						}
					else if (document.querySelector(`link[href="${o}"]${a}`)) return
					const c = document.createElement('link')
					if (
						((c.rel = l ? 'stylesheet' : Ce),
						l || ((c.as = 'script'), (c.crossOrigin = '')),
						(c.href = o),
						document.head.appendChild(c),
						l)
					)
						return new Promise((f, d) => {
							c.addEventListener('load', f),
								c.addEventListener('error', () => d(new Error(`Unable to preload CSS for ${o}`)))
						})
				})
			)
		}
		return i
			.then(() => e())
			.catch((s) => {
				const o = new Event('vite:preloadError', { cancelable: !0 })
				if (((o.payload = s), window.dispatchEvent(o), !o.defaultPrevented)) throw s
			})
	}
class $e extends HTMLElement {
	constructor() {
		super()
		const e = this.querySelector('button[data-open-modal]'),
			n = this.querySelector('button[data-close-modal]'),
			r = this.querySelector('dialog'),
			i = this.querySelector('.dialog-frame'),
			s = (u) => {
				document.body.contains(u.target) && !i.contains(u.target) && a()
			},
			o = (u) => {
				if (u.key === 'Escape' && r.open) a(), window.removeEventListener('keydown', o)
				else return
			},
			l = (u) => {
				r.showModal(),
					Me(
						'dialog',
						{
							clipPath: [
								'polygon(0 0, 100% 0, 100% -200%, -200% -200%)',
								'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
							],
							opacity: [0, 1]
						},
						{ duration: 0.2 }
					),
					document.body.classList.add('overflow-hidden'),
					this.querySelector('input')?.focus(),
					u?.stopPropagation(),
					window.addEventListener('click', s),
					window.addEventListener('keydown', o)
			},
			a = () => {
				r.close(),
					document.body.classList.remove('overflow-hidden'),
					window.removeEventListener('click', s),
					window.addEventListener('keydown', o)
			}
		e.addEventListener('click', l),
			(e.disabled = !1),
			n.addEventListener('click', a),
			document.addEventListener('astro:after-swap', a),
			window.addEventListener('keydown', (u) => {
				u.key === '/' && !r.open && (l(), u.preventDefault())
			}),
			window.addEventListener('DOMContentLoaded', () => {
				;(window.requestIdleCallback || ((c) => setTimeout(c, 1)))(async () => {
					const { PagefindUI: c } = await qe(
						() => import('./ui-core.dzO9qLX-.js'),
						__vite__mapDeps([])
					)
					new c({
						element: '#pagefind__search',
						baseUrl: '/',
						bundlePath: '/'.replace(/\/$/, '') + '/pagefind/',
						showImages: !1
					})
				})
			})
	}
}
customElements.define('site-search', $e)
const Ue = 'astro:before-preparation',
	Ne = 'astro:after-preparation',
	Ve = 'astro:before-swap',
	He = 'astro:after-swap',
	Be = (t) => document.dispatchEvent(new Event(t))
class It extends Event {
	from
	to
	direction
	navigationType
	sourceElement
	info
	newDocument
	constructor(e, n, r, i, s, o, l, a, u) {
		super(e, n),
			(this.from = r),
			(this.to = i),
			(this.direction = s),
			(this.navigationType = o),
			(this.sourceElement = l),
			(this.info = a),
			(this.newDocument = u),
			Object.defineProperties(this, {
				from: { enumerable: !0 },
				to: { enumerable: !0, writable: !0 },
				direction: { enumerable: !0, writable: !0 },
				navigationType: { enumerable: !0 },
				sourceElement: { enumerable: !0 },
				info: { enumerable: !0 },
				newDocument: { enumerable: !0, writable: !0 }
			})
	}
}
class We extends It {
	formData
	loader
	constructor(e, n, r, i, s, o, l, a, u) {
		super(Ue, { cancelable: !0 }, e, n, r, i, s, o, l),
			(this.formData = a),
			(this.loader = u.bind(this, this)),
			Object.defineProperties(this, {
				formData: { enumerable: !0 },
				loader: { enumerable: !0, writable: !0 }
			})
	}
}
class je extends It {
	direction
	viewTransition
	swap
	constructor(e, n, r) {
		super(
			Ve,
			void 0,
			e.from,
			e.to,
			e.direction,
			e.navigationType,
			e.sourceElement,
			e.info,
			e.newDocument
		),
			(this.direction = e.direction),
			(this.viewTransition = n),
			(this.swap = r.bind(this, this)),
			Object.defineProperties(this, {
				direction: { enumerable: !0 },
				viewTransition: { enumerable: !0 },
				swap: { enumerable: !0, writable: !0 }
			})
	}
}
async function Xe(t, e, n, r, i, s, o, l) {
	const a = new We(t, e, n, r, i, s, window.document, o, l)
	return (
		document.dispatchEvent(a) &&
			(await a.loader(),
			a.defaultPrevented || (Be(Ne), a.navigationType !== 'traverse' && rt({ scrollX, scrollY }))),
		a
	)
}
async function Ke(t, e, n) {
	const r = new je(t, e, n)
	return document.dispatchEvent(r), r.swap(), r
}
const ze = history.pushState.bind(history),
	nt = history.replaceState.bind(history),
	rt = (t) => {
		history.state && ((history.scrollRestoration = 'manual'), nt({ ...history.state, ...t }, ''))
	},
	it = !!document.startViewTransition,
	st = () => !!document.querySelector('[name="astro-view-transitions-enabled"]'),
	Mt = (t, e) => t.pathname === e.pathname && t.search === e.search
let X,
	P,
	B = !1,
	_t
const Ct = (t) => document.dispatchEvent(new Event(t)),
	Ft = () => Ct('astro:page-load'),
	Ye = () => {
		let t = document.createElement('div')
		t.setAttribute('aria-live', 'assertive'),
			t.setAttribute('aria-atomic', 'true'),
			(t.className = 'astro-route-announcer'),
			document.body.append(t),
			setTimeout(() => {
				let e = document.title || document.querySelector('h1')?.textContent || location.pathname
				t.textContent = e
			}, 60)
	},
	A = 'data-astro-transition-persist',
	qt = 'data-astro-transition',
	$t = 'data-astro-transition-fallback'
let pt,
	F = 0
history.state
	? ((F = history.state.index),
	  scrollTo({ left: history.state.scrollX, top: history.state.scrollY }))
	: st() && (nt({ index: F, scrollX, scrollY }, ''), (history.scrollRestoration = 'manual'))
const Ge = (t, e) => {
	let n = !1,
		r = !1
	return (...i) => {
		if (n) {
			r = !0
			return
		}
		t(...i),
			(n = !0),
			setTimeout(() => {
				r && ((r = !1), t(...i)), (n = !1)
			}, e)
	}
}
async function Ze(t, e) {
	try {
		const n = await fetch(t, e),
			i = (n.headers.get('content-type') ?? '').split(';', 1)[0].trim()
		return i !== 'text/html' && i !== 'application/xhtml+xml'
			? null
			: { html: await n.text(), redirected: n.redirected ? n.url : void 0, mediaType: i }
	} catch {
		return null
	}
}
function Ut() {
	const t = document.querySelector('[name="astro-view-transitions-fallback"]')
	return t ? t.getAttribute('content') : 'animate'
}
function Je() {
	let t = Promise.resolve()
	for (const e of Array.from(document.scripts)) {
		if (e.dataset.astroExec === '') continue
		const n = document.createElement('script')
		n.innerHTML = e.innerHTML
		for (const r of e.attributes) {
			if (r.name === 'src') {
				const i = new Promise((s) => {
					n.onload = s
				})
				t = t.then(() => i)
			}
			n.setAttribute(r.name, r.value)
		}
		;(n.dataset.astroExec = ''), e.replaceWith(n)
	}
	return t
}
const Nt = (t, e, n, r) => {
	const i = Mt(e, t)
	let s = !1
	if (t.href !== location.href && !r)
		if (n.history === 'replace') {
			const o = history.state
			nt({ ...n.state, index: o.index, scrollX: o.scrollX, scrollY: o.scrollY }, '', t.href)
		} else ze({ ...n.state, index: ++F, scrollX: 0, scrollY: 0 }, '', t.href)
	;(X = t),
		i || (scrollTo({ left: 0, top: 0, behavior: 'instant' }), (s = !0)),
		r
			? scrollTo(r.scrollX, r.scrollY)
			: (t.hash
					? ((history.scrollRestoration = 'auto'), (location.href = t.href))
					: s || scrollTo({ left: 0, top: 0, behavior: 'instant' }),
			  (history.scrollRestoration = 'manual'))
}
function Qe(t) {
	const e = []
	for (const n of t.querySelectorAll('head link[rel=stylesheet]'))
		if (
			!document.querySelector(
				`[${A}="${n.getAttribute(A)}"], link[rel=stylesheet][href="${n.getAttribute('href')}"]`
			)
		) {
			const r = document.createElement('link')
			r.setAttribute('rel', 'preload'),
				r.setAttribute('as', 'style'),
				r.setAttribute('href', n.getAttribute('href')),
				e.push(
					new Promise((i) => {
						;['load', 'error'].forEach((s) => r.addEventListener(s, i)), document.head.append(r)
					})
				)
		}
	return e
}
async function gt(t, e, n, r) {
	const i = (c, f) => {
			const d = c.getAttribute(A),
				p = d && f.head.querySelector(`[${A}="${d}"]`)
			if (p) return p
			if (c.matches('link[rel=stylesheet]')) {
				const v = c.getAttribute('href')
				return f.head.querySelector(`link[rel=stylesheet][href="${v}"]`)
			}
			return null
		},
		s = () => {
			const c = document.activeElement
			if (c?.closest(`[${A}]`)) {
				if (c instanceof HTMLInputElement || c instanceof HTMLTextAreaElement) {
					const f = c.selectionStart,
						d = c.selectionEnd
					return { activeElement: c, start: f, end: d }
				}
				return { activeElement: c }
			} else return { activeElement: null }
		},
		o = ({ activeElement: c, start: f, end: d }) => {
			c &&
				(c.focus(),
				(c instanceof HTMLInputElement || c instanceof HTMLTextAreaElement) &&
					((c.selectionStart = f), (c.selectionEnd = d)))
		},
		l = (c) => {
			const f = document.documentElement,
				d = [...f.attributes].filter(
					({ name: h }) => (f.removeAttribute(h), h.startsWith('data-astro-'))
				)
			;[...c.newDocument.documentElement.attributes, ...d].forEach(({ name: h, value: m }) =>
				f.setAttribute(h, m)
			)
			for (const h of document.scripts)
				for (const m of c.newDocument.scripts)
					if (
						(!h.src && h.textContent === m.textContent) ||
						(h.src && h.type === m.type && h.src === m.src)
					) {
						m.dataset.astroExec = ''
						break
					}
			for (const h of Array.from(document.head.children)) {
				const m = i(h, c.newDocument)
				m ? m.remove() : h.remove()
			}
			document.head.append(...c.newDocument.head.children)
			const p = document.body,
				v = s()
			document.body.replaceWith(c.newDocument.body)
			for (const h of p.querySelectorAll(`[${A}]`)) {
				const m = h.getAttribute(A),
					E = document.querySelector(`[${A}="${m}"]`)
				E && E.replaceWith(h)
			}
			o(v)
		}
	async function a(c) {
		function f(h) {
			const m = h.effect
			return !m || !(m instanceof KeyframeEffect) || !m.target
				? !1
				: window.getComputedStyle(m.target, m.pseudoElement).animationIterationCount === 'infinite'
		}
		const d = document.getAnimations()
		document.documentElement.setAttribute($t, c)
		const v = document.getAnimations().filter((h) => !d.includes(h) && !f(h))
		return Promise.all(v.map((h) => h.finished))
	}
	if (!B)
		document.documentElement.setAttribute(qt, t.direction), r === 'animate' && (await a('old'))
	else throw new DOMException('Transition was skipped')
	const u = await Ke(t, P, l)
	Nt(u.to, u.from, e, n), Ct(He), r === 'animate' && !B && a('new').then(() => _t())
}
async function Vt(t, e, n, r, i) {
	if (!st() || location.origin !== n.origin) {
		location.href = n.href
		return
	}
	const s = i ? 'traverse' : r.history === 'replace' ? 'replace' : 'push'
	if ((s !== 'traverse' && rt({ scrollX, scrollY }), Mt(e, n) && n.hash)) {
		Nt(n, e, r, i)
		return
	}
	const o = await Xe(e, n, t, s, r.sourceElement, r.info, r.formData, l)
	if (o.defaultPrevented) {
		location.href = n.href
		return
	}
	async function l(a) {
		const u = a.to.href,
			c = {}
		if (a.formData) {
			c.method = 'POST'
			const p =
				a.sourceElement instanceof HTMLFormElement
					? a.sourceElement
					: a.sourceElement instanceof HTMLElement && 'form' in a.sourceElement
					? a.sourceElement.form
					: a.sourceElement?.closest('form')
			c.body =
				p?.attributes.getNamedItem('enctype')?.value === 'application/x-www-form-urlencoded'
					? new URLSearchParams(a.formData)
					: a.formData
		}
		const f = await Ze(u, c)
		if (f === null) {
			a.preventDefault()
			return
		}
		if (
			(f.redirected && (a.to = new URL(f.redirected)),
			(pt ??= new DOMParser()),
			(a.newDocument = pt.parseFromString(f.html, f.mediaType)),
			a.newDocument.querySelectorAll('noscript').forEach((p) => p.remove()),
			!a.newDocument.querySelector('[name="astro-view-transitions-enabled"]') && !a.formData)
		) {
			a.preventDefault()
			return
		}
		const d = Qe(a.newDocument)
		d.length && (await Promise.all(d))
	}
	if (((B = !1), it)) P = document.startViewTransition(async () => await gt(o, r, i))
	else {
		const a = (async () => {
			await new Promise((u) => setTimeout(u)), await gt(o, r, i, Ut())
		})()
		P = {
			updateCallbackDone: a,
			ready: a,
			finished: new Promise((u) => (_t = u)),
			skipTransition: () => {
				B = !0
			}
		}
	}
	P.ready.then(async () => {
		await Je(), Ft(), Ye()
	}),
		P.finished.then(() => {
			document.documentElement.removeAttribute(qt), document.documentElement.removeAttribute($t)
		}),
		await P.ready
}
async function yt(t, e) {
	await Vt('forward', X, new URL(t, location.href), e ?? {})
}
function tn(t) {
	if (!st() && t.state) {
		location.reload()
		return
	}
	if (t.state === null) return
	const e = history.state,
		n = e.index,
		r = n > F ? 'forward' : 'back'
	;(F = n), Vt(r, X, new URL(location.href), {}, e)
}
const wt = () => {
	rt({ scrollX, scrollY })
}
{
	;(it || Ut() !== 'none') &&
		((X = new URL(location.href)),
		addEventListener('popstate', tn),
		addEventListener('load', Ft),
		'onscrollend' in window
			? addEventListener('scrollend', wt)
			: addEventListener('scroll', Ge(wt, 350), { passive: !0 }))
	for (const t of document.scripts) t.dataset.astroExec = ''
}
const Ht = new Set(),
	W = new WeakSet()
let Q,
	Bt,
	vt = !1
function en(t) {
	vt ||
		((vt = !0),
		(Q ??= t?.prefetchAll ?? !1),
		(Bt ??= t?.defaultStrategy ?? 'hover'),
		nn(),
		rn(),
		sn())
}
function nn() {
	for (const t of ['touchstart', 'mousedown'])
		document.body.addEventListener(
			t,
			(e) => {
				j(e.target, 'tap') && ot(e.target.href, { with: 'fetch', ignoreSlowConnection: !0 })
			},
			{ passive: !0 }
		)
}
function rn() {
	let t
	document.body.addEventListener(
		'focusin',
		(r) => {
			j(r.target, 'hover') && e(r)
		},
		{ passive: !0 }
	),
		document.body.addEventListener('focusout', n, { passive: !0 }),
		jt(() => {
			for (const r of document.getElementsByTagName('a'))
				W.has(r) ||
					(j(r, 'hover') &&
						(W.add(r),
						r.addEventListener('mouseenter', e, { passive: !0 }),
						r.addEventListener('mouseleave', n, { passive: !0 })))
		})
	function e(r) {
		const i = r.target.href
		t && clearTimeout(t),
			(t = setTimeout(() => {
				ot(i, { with: 'fetch' })
			}, 80))
	}
	function n() {
		t && (clearTimeout(t), (t = 0))
	}
}
function sn() {
	let t
	jt(() => {
		for (const e of document.getElementsByTagName('a'))
			W.has(e) || (j(e, 'viewport') && (W.add(e), (t ??= on()), t.observe(e)))
	})
}
function on() {
	const t = new WeakMap()
	return new IntersectionObserver((e, n) => {
		for (const r of e) {
			const i = r.target,
				s = t.get(i)
			r.isIntersecting
				? (s && clearTimeout(s),
				  t.set(
						i,
						setTimeout(() => {
							n.unobserve(i), t.delete(i), ot(i.href, { with: 'link' })
						}, 300)
				  ))
				: s && (clearTimeout(s), t.delete(i))
		}
	})
}
function ot(t, e) {
	const n = e?.ignoreSlowConnection ?? !1
	if (!an(t, n)) return
	if ((Ht.add(t), (e?.with ?? 'link') === 'link')) {
		const i = document.createElement('link')
		;(i.rel = 'prefetch'), i.setAttribute('href', t), document.head.append(i)
	} else
		fetch(t).catch((i) => {
			console.log(`[astro] Failed to prefetch ${t}`), console.error(i)
		})
}
function an(t, e) {
	if (!navigator.onLine || (!e && Wt())) return !1
	try {
		const n = new URL(t, location.href)
		return (
			location.origin === n.origin &&
			(location.pathname !== n.pathname || location.search !== n.search) &&
			!Ht.has(t)
		)
	} catch {}
	return !1
}
function j(t, e) {
	if (t?.tagName !== 'A') return !1
	const n = t.dataset.astroPrefetch
	return n === 'false'
		? !1
		: e === 'tap' && (n != null || Q) && Wt()
		? !0
		: (n == null && Q) || n === ''
		? e === Bt
		: n === e
}
function Wt() {
	if ('connection' in navigator) {
		const t = navigator.connection
		return t.saveData || /(2|3)g/.test(t.effectiveType)
	}
	return !1
}
function jt(t) {
	t()
	let e = !1
	document.addEventListener('astro:page-load', () => {
		if (!e) {
			e = !0
			return
		}
		t()
	})
}
function cn() {
	const t = document.querySelector('[name="astro-view-transitions-fallback"]')
	return t ? t.getAttribute('content') : 'animate'
}
function bt(t) {
	return t.dataset.astroReload !== void 0
}
;(it || cn() !== 'none') &&
	(document.addEventListener('click', (t) => {
		let e = t.target
		if (
			(e instanceof Element && (e = e.closest('a, area')),
			!(e instanceof HTMLAnchorElement) &&
				!(e instanceof SVGAElement) &&
				!(e instanceof HTMLAreaElement))
		)
			return
		const n = e instanceof HTMLElement ? e.target : e.target.baseVal,
			r = e instanceof HTMLElement ? e.href : e.href.baseVal,
			i = new URL(r, location.href).origin
		bt(e) ||
			e.hasAttribute('download') ||
			!e.href ||
			(n && n !== '_self') ||
			i !== location.origin ||
			t.button !== 0 ||
			t.metaKey ||
			t.ctrlKey ||
			t.altKey ||
			t.shiftKey ||
			t.defaultPrevented ||
			(t.preventDefault(),
			yt(r, {
				history: e.dataset.astroHistory === 'replace' ? 'replace' : 'auto',
				sourceElement: e
			}))
	}),
	document.addEventListener('submit', (t) => {
		let e = t.target
		if (e.tagName !== 'FORM' || t.defaultPrevented || bt(e)) return
		const n = e,
			r = t.submitter,
			i = new FormData(n, r)
		let s = r?.getAttribute('formaction') ?? n.action ?? location.pathname
		const o = r?.getAttribute('formmethod') ?? n.method
		if (o === 'dialog') return
		const l = { sourceElement: r ?? n }
		if (o === 'get') {
			const a = new URLSearchParams(i),
				u = new URL(s)
			;(u.search = a.toString()), (s = u.toString())
		} else l.formData = i
		t.preventDefault(), yt(s, l)
	}),
	en({ prefetchAll: !0 }))
export { qe as _, Me as a }
function __vite__mapDeps(indexes) {
	if (!__vite__mapDeps.viteFileDeps) {
		__vite__mapDeps.viteFileDeps = []
	}
	return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
