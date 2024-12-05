import { _ as Cs } from './hoisted.XRwbKKUJ.js'
var Bs = Object.defineProperty,
	F = (e, t) => {
		for (var u in t) Bs(e, u, { get: t[u], enumerable: !0 })
	}
function P() {}
function cu(e) {
	return e()
}
function De() {
	return Object.create(null)
}
function J(e) {
	e.forEach(cu)
}
function fu(e) {
	return typeof e == 'function'
}
function fe(e, t) {
	return e != e ? t == t : e !== t || (e && typeof e == 'object') || typeof e == 'function'
}
var oe
function ce(e, t) {
	return oe || (oe = document.createElement('a')), (oe.href = t), e === oe.href
}
function Rs(e) {
	return Object.keys(e).length === 0
}
function R(e, t) {
	e.appendChild(t)
}
function T(e, t, u) {
	e.insertBefore(t, u || null)
}
function v(e) {
	e.parentNode && e.parentNode.removeChild(e)
}
function ne(e, t) {
	for (let u = 0; u < e.length; u += 1) e[u] && e[u].d(t)
}
function A(e) {
	return document.createElement(e)
}
function ps(e) {
	return document.createElementNS('http://www.w3.org/2000/svg', e)
}
function S(e) {
	return document.createTextNode(e)
}
function b() {
	return S(' ')
}
function $() {
	return S('')
}
function G(e, t, u, r) {
	return e.addEventListener(t, u, r), () => e.removeEventListener(t, u, r)
}
function m(e, t, u) {
	u == null ? e.removeAttribute(t) : e.getAttribute(t) !== u && e.setAttribute(t, u)
}
function As(e) {
	return Array.from(e.childNodes)
}
function y(e, t) {
	;(t = '' + t), e.data !== t && (e.data = t)
}
function we(e, t) {
	e.value = t ?? ''
}
function K(e, t, u) {
	e.classList[u ? 'add' : 'remove'](t)
}
var vs = class {
		constructor(e = !1) {
			;(this.is_svg = !1), (this.is_svg = e), (this.e = this.n = null)
		}
		c(e) {
			this.h(e)
		}
		m(e, t, u = null) {
			this.e ||
				(this.is_svg
					? (this.e = ps(t.nodeName))
					: (this.e = A(t.nodeType === 11 ? 'TEMPLATE' : t.nodeName)),
				(this.t = t.tagName !== 'TEMPLATE' ? t : t.content),
				this.c(e)),
				this.i(u)
		}
		h(e) {
			;(this.e.innerHTML = e),
				(this.n = Array.from(
					this.e.nodeName === 'TEMPLATE' ? this.e.content.childNodes : this.e.childNodes
				))
		}
		i(e) {
			for (let t = 0; t < this.n.length; t += 1) T(this.t, this.n[t], e)
		}
		p(e) {
			this.d(), this.h(e), this.i(this.a)
		}
		d() {
			this.n.forEach(v)
		}
	},
	re
function te(e) {
	re = e
}
function Eu() {
	if (!re) throw new Error('Function called outside component initialization')
	return re
}
function Ts(e) {
	Eu().$$.on_mount.push(e)
}
function ks(e) {
	Eu().$$.on_destroy.push(e)
}
var Y = [],
	se = [],
	Q = [],
	Re = [],
	Fs = Promise.resolve(),
	pe = !1
function bs() {
	pe || ((pe = !0), Fs.then(hu))
}
function Ae(e) {
	Q.push(e)
}
function Ms(e) {
	Re.push(e)
}
var Be = new Set(),
	Z = 0
function hu() {
	if (Z !== 0) return
	const e = re
	do {
		try {
			for (; Z < Y.length; ) {
				const t = Y[Z]
				Z++, te(t), Ss(t.$$)
			}
		} catch (t) {
			throw ((Y.length = 0), (Z = 0), t)
		}
		for (te(null), Y.length = 0, Z = 0; se.length; ) se.pop()()
		for (let t = 0; t < Q.length; t += 1) {
			const u = Q[t]
			Be.has(u) || (Be.add(u), u())
		}
		Q.length = 0
	} while (Y.length)
	for (; Re.length; ) Re.pop()()
	;(pe = !1), Be.clear(), te(e)
}
function Ss(e) {
	if (e.fragment !== null) {
		e.update(), J(e.before_update)
		const t = e.dirty
		;(e.dirty = [-1]), e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Ae)
	}
}
function Hs(e) {
	const t = [],
		u = []
	Q.forEach((r) => (e.indexOf(r) === -1 ? t.push(r) : u.push(r))), u.forEach((r) => r()), (Q = t)
}
var _e = new Set(),
	W
function le() {
	W = { r: 0, c: [], p: W }
}
function ae() {
	W.r || J(W.c), (W = W.p)
}
function N(e, t) {
	e && e.i && (_e.delete(e), e.i(t))
}
function I(e, t, u, r) {
	if (e && e.o) {
		if (_e.has(e)) return
		_e.add(e),
			W.c.push(() => {
				_e.delete(e), r && (u && e.d(1), r())
			}),
			e.o(t)
	} else r && r()
}
function Ds(e, t) {
	I(e, 1, 1, () => {
		t.delete(e.key)
	})
}
function ws(e, t, u, r, s, l, a, n, i, h, c, f) {
	let _ = e.length,
		C = l.length,
		o = _
	const d = {}
	for (; o--; ) d[e[o].key] = o
	const E = [],
		B = new Map(),
		p = new Map(),
		k = []
	for (o = C; o--; ) {
		const H = f(s, l, o),
			z = u(H)
		let O = a.get(z)
		O ? r && k.push(() => O.p(H, t)) : ((O = h(z, H)), O.c()),
			B.set(z, (E[o] = O)),
			z in d && p.set(z, Math.abs(o - d[z]))
	}
	const M = new Set(),
		L = new Set()
	function q(H) {
		N(H, 1), H.m(n, c), a.set(H.key, H), (c = H.first), C--
	}
	for (; _ && C; ) {
		const H = E[C - 1],
			z = e[_ - 1],
			O = H.key,
			x = z.key
		H === z
			? ((c = H.first), _--, C--)
			: B.has(x)
			? !a.has(O) || M.has(O)
				? q(H)
				: L.has(x)
				? _--
				: p.get(O) > p.get(x)
				? (L.add(O), q(H))
				: (M.add(x), _--)
			: (i(z, a), _--)
	}
	for (; _--; ) {
		const H = e[_]
		B.has(H.key) || i(H, a)
	}
	for (; C; ) q(E[C - 1])
	return J(k), E
}
function Ns(e, t, u) {
	const r = e.$$.props[t]
	r !== void 0 && ((e.$$.bound[r] = u), u(e.$$.ctx[r]))
}
function Te(e) {
	e && e.c()
}
function Ee(e, t, u, r) {
	const { fragment: s, after_update: l } = e.$$
	s && s.m(t, u),
		r ||
			Ae(() => {
				const a = e.$$.on_mount.map(cu).filter(fu)
				e.$$.on_destroy ? e.$$.on_destroy.push(...a) : J(a), (e.$$.on_mount = [])
			}),
		l.forEach(Ae)
}
function he(e, t) {
	const u = e.$$
	u.fragment !== null &&
		(Hs(u.after_update),
		J(u.on_destroy),
		u.fragment && u.fragment.d(t),
		(u.on_destroy = u.fragment = null),
		(u.ctx = []))
}
function ys(e, t) {
	e.$$.dirty[0] === -1 && (Y.push(e), bs(), e.$$.dirty.fill(0)),
		(e.$$.dirty[(t / 31) | 0] |= 1 << t % 31)
}
function de(e, t, u, r, s, l, a, n = [-1]) {
	const i = re
	te(e)
	const h = (e.$$ = {
		fragment: null,
		ctx: [],
		props: l,
		update: P,
		not_equal: s,
		bound: De(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(t.context || (i ? i.$$.context : [])),
		callbacks: De(),
		dirty: n,
		skip_bound: !1,
		root: t.target || i.$$.root
	})
	a && a(h.root)
	let c = !1
	if (
		((h.ctx = u
			? u(e, t.props || {}, (f, _, ...C) => {
					const o = C.length ? C[0] : _
					return (
						h.ctx &&
							s(h.ctx[f], (h.ctx[f] = o)) &&
							(!h.skip_bound && h.bound[f] && h.bound[f](o), c && ys(e, f)),
						_
					)
			  })
			: []),
		h.update(),
		(c = !0),
		J(h.before_update),
		(h.fragment = r ? r(h.ctx) : !1),
		t.target)
	) {
		if (t.hydrate) {
			const f = As(t.target)
			h.fragment && h.fragment.l(f), f.forEach(v)
		} else h.fragment && h.fragment.c()
		t.intro && N(e.$$.fragment), Ee(e, t.target, t.anchor, t.customElement), hu()
	}
	te(i)
}
var me = class {
	$destroy() {
		he(this, 1), (this.$destroy = P)
	}
	$on(e, t) {
		if (!fu(t)) return P
		const u = this.$$.callbacks[e] || (this.$$.callbacks[e] = [])
		return (
			u.push(t),
			() => {
				const r = u.indexOf(t)
				r !== -1 && u.splice(r, 1)
			}
		)
	}
	$set(e) {
		this.$$set && !Rs(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1))
	}
}
function j(e) {
	const t = typeof e == 'string' ? e.charCodeAt(0) : e
	return (t >= 97 && t <= 122) || (t >= 65 && t <= 90)
}
function X(e) {
	const t = typeof e == 'string' ? e.charCodeAt(0) : e
	return t >= 48 && t <= 57
}
function V(e) {
	return j(e) || X(e)
}
var zs = [
		'art-lojban',
		'cel-gaulish',
		'no-bok',
		'no-nyn',
		'zh-guoyu',
		'zh-hakka',
		'zh-min',
		'zh-min-nan',
		'zh-xiang'
	],
	Ne = {
		'en-gb-oed': 'en-GB-oxendict',
		'i-ami': 'ami',
		'i-bnn': 'bnn',
		'i-default': null,
		'i-enochian': null,
		'i-hak': 'hak',
		'i-klingon': 'tlh',
		'i-lux': 'lb',
		'i-mingo': null,
		'i-navajo': 'nv',
		'i-pwn': 'pwn',
		'i-tao': 'tao',
		'i-tay': 'tay',
		'i-tsu': 'tsu',
		'sgn-be-fr': 'sfb',
		'sgn-be-nl': 'vgt',
		'sgn-ch-de': 'sgg',
		'art-lojban': 'jbo',
		'cel-gaulish': null,
		'no-bok': 'nb',
		'no-nyn': 'nn',
		'zh-guoyu': 'cmn',
		'zh-hakka': 'hak',
		'zh-min': null,
		'zh-min-nan': 'nan',
		'zh-xiang': 'hsn'
	},
	js = {}.hasOwnProperty
function du(e, t = {}) {
	const u = ye(),
		r = String(e),
		s = r.toLowerCase()
	let l = 0
	if (e == null) throw new Error('Expected string, got `' + e + '`')
	if (js.call(Ne, s)) {
		const n = Ne[s]
		return (t.normalize === void 0 || t.normalize === null || t.normalize) && typeof n == 'string'
			? du(n)
			: ((u[zs.includes(s) ? 'regular' : 'irregular'] = r), u)
	}
	for (; j(s.charCodeAt(l)) && l < 9; ) l++
	if (l > 1 && l < 9) {
		if (((u.language = r.slice(0, l)), l < 4)) {
			let n = 0
			for (
				;
				s.charCodeAt(l) === 45 &&
				j(s.charCodeAt(l + 1)) &&
				j(s.charCodeAt(l + 2)) &&
				j(s.charCodeAt(l + 3)) &&
				!j(s.charCodeAt(l + 4));

			) {
				if (n > 2) return a(l, 3, 'Too many extended language subtags, expected at most 3 subtags')
				u.extendedLanguageSubtags.push(r.slice(l + 1, l + 4)), (l += 4), n++
			}
		}
		for (
			s.charCodeAt(l) === 45 &&
				j(s.charCodeAt(l + 1)) &&
				j(s.charCodeAt(l + 2)) &&
				j(s.charCodeAt(l + 3)) &&
				j(s.charCodeAt(l + 4)) &&
				!j(s.charCodeAt(l + 5)) &&
				((u.script = r.slice(l + 1, l + 5)), (l += 5)),
				s.charCodeAt(l) === 45 &&
					(j(s.charCodeAt(l + 1)) && j(s.charCodeAt(l + 2)) && !j(s.charCodeAt(l + 3))
						? ((u.region = r.slice(l + 1, l + 3)), (l += 3))
						: X(s.charCodeAt(l + 1)) &&
						  X(s.charCodeAt(l + 2)) &&
						  X(s.charCodeAt(l + 3)) &&
						  !X(s.charCodeAt(l + 4)) &&
						  ((u.region = r.slice(l + 1, l + 4)), (l += 4)));
			s.charCodeAt(l) === 45;

		) {
			const n = l + 1
			let i = n
			for (; V(s.charCodeAt(i)); ) {
				if (i - n > 7) return a(i, 1, 'Too long variant, expected at most 8 characters')
				i++
			}
			if (i - n > 4 || (i - n > 3 && X(s.charCodeAt(n)))) u.variants.push(r.slice(n, i)), (l = i)
			else break
		}
		for (
			;
			s.charCodeAt(l) === 45 &&
			!(
				s.charCodeAt(l + 1) === 120 ||
				!V(s.charCodeAt(l + 1)) ||
				s.charCodeAt(l + 2) !== 45 ||
				!V(s.charCodeAt(l + 3))
			);

		) {
			let n = l + 2,
				i = 0
			for (; s.charCodeAt(n) === 45 && V(s.charCodeAt(n + 1)) && V(s.charCodeAt(n + 2)); ) {
				const h = n + 1
				for (n = h + 2, i++; V(s.charCodeAt(n)); ) {
					if (n - h > 7) return a(n, 2, 'Too long extension, expected at most 8 characters')
					n++
				}
			}
			if (!i)
				return a(n, 4, 'Empty extension, extensions must have at least 2 characters of content')
			u.extensions.push({ singleton: r.charAt(l + 1), extensions: r.slice(l + 3, n).split('-') }),
				(l = n)
		}
	} else l = 0
	if (
		(l === 0 && s.charCodeAt(l) === 120) ||
		(s.charCodeAt(l) === 45 && s.charCodeAt(l + 1) === 120)
	) {
		l = l ? l + 2 : 1
		let n = l
		for (; s.charCodeAt(n) === 45 && V(s.charCodeAt(n + 1)); ) {
			const i = l + 1
			for (n = i; V(s.charCodeAt(n)); ) {
				if (n - i > 7) return a(n, 5, 'Too long private-use area, expected at most 8 characters')
				n++
			}
			u.privateuse.push(r.slice(l + 1, n)), (l = n)
		}
	}
	if (l !== r.length) return a(l, 6, 'Found superfluous content after tag')
	return u
	function a(n, i, h) {
		return t.warning && t.warning(h, i, n), t.forgiving ? u : ye()
	}
}
function ye() {
	return {
		language: null,
		extendedLanguageSubtags: [],
		script: null,
		region: null,
		variants: [],
		extensions: [],
		privateuse: [],
		irregular: null,
		regular: null
	}
}
function ze(e, t, u) {
	const r = e.slice()
	return (r[8] = t[u][0]), (r[9] = t[u][1]), r
}
function Os(e) {
	let t,
		u,
		r,
		s,
		l,
		a = e[0] && je()
	return {
		c() {
			a && a.c(),
				(t = b()),
				(u = A('div')),
				(r = A('p')),
				(r.textContent = `${e[3](30)}`),
				(s = b()),
				(l = A('p')),
				(l.textContent = `${e[3](40)}`),
				m(r, 'class', 'pagefind-ui__result-title pagefind-ui__loading svelte-j9e30'),
				m(l, 'class', 'pagefind-ui__result-excerpt pagefind-ui__loading svelte-j9e30'),
				m(u, 'class', 'pagefind-ui__result-inner svelte-j9e30')
		},
		m(n, i) {
			a && a.m(n, i), T(n, t, i), T(n, u, i), R(u, r), R(u, s), R(u, l)
		},
		p(n, i) {
			n[0] ? a || ((a = je()), a.c(), a.m(t.parentNode, t)) : a && (a.d(1), (a = null))
		},
		d(n) {
			a && a.d(n), n && v(t), n && v(u)
		}
	}
}
function Us(e) {
	let t,
		u,
		r,
		s,
		l = e[1].meta?.title + '',
		a,
		n,
		i,
		h,
		c = e[1].excerpt + '',
		f,
		_ = e[0] && Oe(e),
		C = e[2].length && Ie(e)
	return {
		c() {
			_ && _.c(),
				(t = b()),
				(u = A('div')),
				(r = A('p')),
				(s = A('a')),
				(a = S(l)),
				(i = b()),
				(h = A('p')),
				(f = b()),
				C && C.c(),
				m(s, 'class', 'pagefind-ui__result-link svelte-j9e30'),
				m(s, 'href', (n = e[1].meta?.url || e[1].url)),
				m(r, 'class', 'pagefind-ui__result-title svelte-j9e30'),
				m(h, 'class', 'pagefind-ui__result-excerpt svelte-j9e30'),
				m(u, 'class', 'pagefind-ui__result-inner svelte-j9e30')
		},
		m(o, d) {
			_ && _.m(o, d),
				T(o, t, d),
				T(o, u, d),
				R(u, r),
				R(r, s),
				R(s, a),
				R(u, i),
				R(u, h),
				(h.innerHTML = c),
				R(u, f),
				C && C.m(u, null)
		},
		p(o, d) {
			o[0]
				? _
					? _.p(o, d)
					: ((_ = Oe(o)), _.c(), _.m(t.parentNode, t))
				: _ && (_.d(1), (_ = null)),
				d & 2 && l !== (l = o[1].meta?.title + '') && y(a, l),
				d & 2 && n !== (n = o[1].meta?.url || o[1].url) && m(s, 'href', n),
				d & 2 && c !== (c = o[1].excerpt + '') && (h.innerHTML = c),
				o[2].length
					? C
						? C.p(o, d)
						: ((C = Ie(o)), C.c(), C.m(u, null))
					: C && (C.d(1), (C = null))
		},
		d(o) {
			_ && _.d(o), o && v(t), o && v(u), C && C.d()
		}
	}
}
function je(e) {
	let t
	return {
		c() {
			;(t = A('div')), m(t, 'class', 'pagefind-ui__result-thumb pagefind-ui__loading svelte-j9e30')
		},
		m(u, r) {
			T(u, t, r)
		},
		d(u) {
			u && v(t)
		}
	}
}
function Oe(e) {
	let t,
		u = e[1].meta.image && Ue(e)
	return {
		c() {
			;(t = A('div')), u && u.c(), m(t, 'class', 'pagefind-ui__result-thumb svelte-j9e30')
		},
		m(r, s) {
			T(r, t, s), u && u.m(t, null)
		},
		p(r, s) {
			r[1].meta.image
				? u
					? u.p(r, s)
					: ((u = Ue(r)), u.c(), u.m(t, null))
				: u && (u.d(1), (u = null))
		},
		d(r) {
			r && v(t), u && u.d()
		}
	}
}
function Ue(e) {
	let t, u, r
	return {
		c() {
			;(t = A('img')),
				m(t, 'class', 'pagefind-ui__result-image svelte-j9e30'),
				ce(t.src, (u = e[1].meta?.image)) || m(t, 'src', u),
				m(t, 'alt', (r = e[1].meta?.image_alt || e[1].meta?.title))
		},
		m(s, l) {
			T(s, t, l)
		},
		p(s, l) {
			l & 2 && !ce(t.src, (u = s[1].meta?.image)) && m(t, 'src', u),
				l & 2 && r !== (r = s[1].meta?.image_alt || s[1].meta?.title) && m(t, 'alt', r)
		},
		d(s) {
			s && v(t)
		}
	}
}
function Ie(e) {
	let t,
		u = e[2],
		r = []
	for (let s = 0; s < u.length; s += 1) r[s] = Pe(ze(e, u, s))
	return {
		c() {
			t = A('ul')
			for (let s = 0; s < r.length; s += 1) r[s].c()
			m(t, 'class', 'pagefind-ui__result-tags svelte-j9e30')
		},
		m(s, l) {
			T(s, t, l)
			for (let a = 0; a < r.length; a += 1) r[a] && r[a].m(t, null)
		},
		p(s, l) {
			if (l & 4) {
				u = s[2]
				let a
				for (a = 0; a < u.length; a += 1) {
					const n = ze(s, u, a)
					r[a] ? r[a].p(n, l) : ((r[a] = Pe(n)), r[a].c(), r[a].m(t, null))
				}
				for (; a < r.length; a += 1) r[a].d(1)
				r.length = u.length
			}
		},
		d(s) {
			s && v(t), ne(r, s)
		}
	}
}
function Pe(e) {
	let t,
		u = e[8].replace(/^(\w)/, Le) + '',
		r,
		s,
		l = e[9] + '',
		a,
		n
	return {
		c() {
			;(t = A('li')),
				(r = S(u)),
				(s = S(': ')),
				(a = S(l)),
				(n = b()),
				m(t, 'class', 'pagefind-ui__result-tag svelte-j9e30')
		},
		m(i, h) {
			T(i, t, h), R(t, r), R(t, s), R(t, a), R(t, n)
		},
		p(i, h) {
			h & 4 && u !== (u = i[8].replace(/^(\w)/, Le) + '') && y(r, u),
				h & 4 && l !== (l = i[9] + '') && y(a, l)
		},
		d(i) {
			i && v(t)
		}
	}
}
function Is(e) {
	let t
	function u(l, a) {
		return l[1] ? Us : Os
	}
	let r = u(e),
		s = r(e)
	return {
		c() {
			;(t = A('li')), s.c(), m(t, 'class', 'pagefind-ui__result svelte-j9e30')
		},
		m(l, a) {
			T(l, t, a), s.m(t, null)
		},
		p(l, [a]) {
			r === (r = u(l)) && s ? s.p(l, a) : (s.d(1), (s = r(l)), s && (s.c(), s.m(t, null)))
		},
		i: P,
		o: P,
		d(l) {
			l && v(t), s.d()
		}
	}
}
var Le = (e) => e.toLocaleUpperCase()
function Ps(e, t, u) {
	let { show_images: r = !0 } = t,
		{ process_result: s = null } = t,
		{ result: l = { data: async () => {} } } = t
	const a = ['title', 'image', 'image_alt', 'url']
	let n,
		i = []
	const h = async (f) => {
			u(1, (n = await f.data())),
				u(1, (n = s?.(n) ?? n)),
				u(2, (i = Object.entries(n.meta).filter(([_]) => !a.includes(_))))
		},
		c = (f = 30) => '. '.repeat(Math.floor(10 + Math.random() * f))
	return (
		(e.$$set = (f) => {
			'show_images' in f && u(0, (r = f.show_images)),
				'process_result' in f && u(4, (s = f.process_result)),
				'result' in f && u(5, (l = f.result))
		}),
		(e.$$.update = () => {
			e.$$.dirty & 32 && h(l)
		}),
		[r, n, i, c, s, l]
	)
}
var Ls = class extends me {
		constructor(e) {
			super(), de(this, e, Ps, Is, fe, { show_images: 0, process_result: 4, result: 5 })
		}
	},
	qs = Ls
function qe(e, t, u) {
	const r = e.slice()
	return (r[11] = t[u][0]), (r[12] = t[u][1]), r
}
function xe(e, t, u) {
	const r = e.slice()
	return (r[15] = t[u]), r
}
function xs(e) {
	let t,
		u,
		r,
		s,
		l,
		a = e[0] && Ve()
	return {
		c() {
			a && a.c(),
				(t = b()),
				(u = A('div')),
				(r = A('p')),
				(r.textContent = `${e[5](30)}`),
				(s = b()),
				(l = A('p')),
				(l.textContent = `${e[5](40)}`),
				m(r, 'class', 'pagefind-ui__result-title pagefind-ui__loading svelte-4xnkmf'),
				m(l, 'class', 'pagefind-ui__result-excerpt pagefind-ui__loading svelte-4xnkmf'),
				m(u, 'class', 'pagefind-ui__result-inner svelte-4xnkmf')
		},
		m(n, i) {
			a && a.m(n, i), T(n, t, i), T(n, u, i), R(u, r), R(u, s), R(u, l)
		},
		p(n, i) {
			n[0] ? a || ((a = Ve()), a.c(), a.m(t.parentNode, t)) : a && (a.d(1), (a = null))
		},
		d(n) {
			a && a.d(n), n && v(t), n && v(u)
		}
	}
}
function Vs(e) {
	let t,
		u,
		r,
		s,
		l = e[1].meta?.title + '',
		a,
		n,
		i,
		h,
		c,
		f = e[0] && Ke(e),
		_ = e[4] && We(e),
		C = e[3],
		o = []
	for (let E = 0; E < C.length; E += 1) o[E] = Je(xe(e, C, E))
	let d = e[2].length && Ze(e)
	return {
		c() {
			f && f.c(),
				(t = b()),
				(u = A('div')),
				(r = A('p')),
				(s = A('a')),
				(a = S(l)),
				(i = b()),
				_ && _.c(),
				(h = b())
			for (let E = 0; E < o.length; E += 1) o[E].c()
			;(c = b()),
				d && d.c(),
				m(s, 'class', 'pagefind-ui__result-link svelte-4xnkmf'),
				m(s, 'href', (n = e[1].meta?.url || e[1].url)),
				m(r, 'class', 'pagefind-ui__result-title svelte-4xnkmf'),
				m(u, 'class', 'pagefind-ui__result-inner svelte-4xnkmf')
		},
		m(E, B) {
			f && f.m(E, B),
				T(E, t, B),
				T(E, u, B),
				R(u, r),
				R(r, s),
				R(s, a),
				R(u, i),
				_ && _.m(u, null),
				R(u, h)
			for (let p = 0; p < o.length; p += 1) o[p] && o[p].m(u, null)
			R(u, c), d && d.m(u, null)
		},
		p(E, B) {
			if (
				(E[0]
					? f
						? f.p(E, B)
						: ((f = Ke(E)), f.c(), f.m(t.parentNode, t))
					: f && (f.d(1), (f = null)),
				B & 2 && l !== (l = E[1].meta?.title + '') && y(a, l),
				B & 2 && n !== (n = E[1].meta?.url || E[1].url) && m(s, 'href', n),
				E[4] ? (_ ? _.p(E, B) : ((_ = We(E)), _.c(), _.m(u, h))) : _ && (_.d(1), (_ = null)),
				B & 8)
			) {
				C = E[3]
				let p
				for (p = 0; p < C.length; p += 1) {
					const k = xe(E, C, p)
					o[p] ? o[p].p(k, B) : ((o[p] = Je(k)), o[p].c(), o[p].m(u, c))
				}
				for (; p < o.length; p += 1) o[p].d(1)
				o.length = C.length
			}
			E[2].length ? (d ? d.p(E, B) : ((d = Ze(E)), d.c(), d.m(u, null))) : d && (d.d(1), (d = null))
		},
		d(E) {
			f && f.d(E), E && v(t), E && v(u), _ && _.d(), ne(o, E), d && d.d()
		}
	}
}
function Ve(e) {
	let t
	return {
		c() {
			;(t = A('div')), m(t, 'class', 'pagefind-ui__result-thumb pagefind-ui__loading svelte-4xnkmf')
		},
		m(u, r) {
			T(u, t, r)
		},
		d(u) {
			u && v(t)
		}
	}
}
function Ke(e) {
	let t,
		u = e[1].meta.image && Ge(e)
	return {
		c() {
			;(t = A('div')), u && u.c(), m(t, 'class', 'pagefind-ui__result-thumb svelte-4xnkmf')
		},
		m(r, s) {
			T(r, t, s), u && u.m(t, null)
		},
		p(r, s) {
			r[1].meta.image
				? u
					? u.p(r, s)
					: ((u = Ge(r)), u.c(), u.m(t, null))
				: u && (u.d(1), (u = null))
		},
		d(r) {
			r && v(t), u && u.d()
		}
	}
}
function Ge(e) {
	let t, u, r
	return {
		c() {
			;(t = A('img')),
				m(t, 'class', 'pagefind-ui__result-image svelte-4xnkmf'),
				ce(t.src, (u = e[1].meta?.image)) || m(t, 'src', u),
				m(t, 'alt', (r = e[1].meta?.image_alt || e[1].meta?.title))
		},
		m(s, l) {
			T(s, t, l)
		},
		p(s, l) {
			l & 2 && !ce(t.src, (u = s[1].meta?.image)) && m(t, 'src', u),
				l & 2 && r !== (r = s[1].meta?.image_alt || s[1].meta?.title) && m(t, 'alt', r)
		},
		d(s) {
			s && v(t)
		}
	}
}
function We(e) {
	let t,
		u = e[1].excerpt + ''
	return {
		c() {
			;(t = A('p')), m(t, 'class', 'pagefind-ui__result-excerpt svelte-4xnkmf')
		},
		m(r, s) {
			T(r, t, s), (t.innerHTML = u)
		},
		p(r, s) {
			s & 2 && u !== (u = r[1].excerpt + '') && (t.innerHTML = u)
		},
		d(r) {
			r && v(t)
		}
	}
}
function Je(e) {
	let t,
		u,
		r,
		s = e[15].title + '',
		l,
		a,
		n,
		i,
		h = e[15].excerpt + ''
	return {
		c() {
			;(t = A('div')),
				(u = A('p')),
				(r = A('a')),
				(l = S(s)),
				(n = b()),
				(i = A('p')),
				m(r, 'class', 'pagefind-ui__result-link svelte-4xnkmf'),
				m(r, 'href', (a = e[15].url)),
				m(u, 'class', 'pagefind-ui__result-title svelte-4xnkmf'),
				m(i, 'class', 'pagefind-ui__result-excerpt svelte-4xnkmf'),
				m(t, 'class', 'pagefind-ui__result-nested svelte-4xnkmf')
		},
		m(c, f) {
			T(c, t, f), R(t, u), R(u, r), R(r, l), R(t, n), R(t, i), (i.innerHTML = h)
		},
		p(c, f) {
			f & 8 && s !== (s = c[15].title + '') && y(l, s),
				f & 8 && a !== (a = c[15].url) && m(r, 'href', a),
				f & 8 && h !== (h = c[15].excerpt + '') && (i.innerHTML = h)
		},
		d(c) {
			c && v(t)
		}
	}
}
function Ze(e) {
	let t,
		u = e[2],
		r = []
	for (let s = 0; s < u.length; s += 1) r[s] = Ye(qe(e, u, s))
	return {
		c() {
			t = A('ul')
			for (let s = 0; s < r.length; s += 1) r[s].c()
			m(t, 'class', 'pagefind-ui__result-tags svelte-4xnkmf')
		},
		m(s, l) {
			T(s, t, l)
			for (let a = 0; a < r.length; a += 1) r[a] && r[a].m(t, null)
		},
		p(s, l) {
			if (l & 4) {
				u = s[2]
				let a
				for (a = 0; a < u.length; a += 1) {
					const n = qe(s, u, a)
					r[a] ? r[a].p(n, l) : ((r[a] = Ye(n)), r[a].c(), r[a].m(t, null))
				}
				for (; a < r.length; a += 1) r[a].d(1)
				r.length = u.length
			}
		},
		d(s) {
			s && v(t), ne(r, s)
		}
	}
}
function Ye(e) {
	let t,
		u = e[11].replace(/^(\w)/, Xe) + '',
		r,
		s,
		l = e[12] + '',
		a,
		n
	return {
		c() {
			;(t = A('li')),
				(r = S(u)),
				(s = S(': ')),
				(a = S(l)),
				(n = b()),
				m(t, 'class', 'pagefind-ui__result-tag svelte-4xnkmf')
		},
		m(i, h) {
			T(i, t, h), R(t, r), R(t, s), R(t, a), R(t, n)
		},
		p(i, h) {
			h & 4 && u !== (u = i[11].replace(/^(\w)/, Xe) + '') && y(r, u),
				h & 4 && l !== (l = i[12] + '') && y(a, l)
		},
		d(i) {
			i && v(t)
		}
	}
}
function Ks(e) {
	let t
	function u(l, a) {
		return l[1] ? Vs : xs
	}
	let r = u(e),
		s = r(e)
	return {
		c() {
			;(t = A('li')), s.c(), m(t, 'class', 'pagefind-ui__result svelte-4xnkmf')
		},
		m(l, a) {
			T(l, t, a), s.m(t, null)
		},
		p(l, [a]) {
			r === (r = u(l)) && s ? s.p(l, a) : (s.d(1), (s = r(l)), s && (s.c(), s.m(t, null)))
		},
		i: P,
		o: P,
		d(l) {
			l && v(t), s.d()
		}
	}
}
var Xe = (e) => e.toLocaleUpperCase()
function Gs(e, t, u) {
	let { show_images: r = !0 } = t,
		{ process_result: s = null } = t,
		{ result: l = { data: async () => {} } } = t
	const a = ['title', 'image', 'image_alt', 'url']
	let n,
		i = [],
		h = [],
		c = !1
	const f = (o, d) => {
			if (o.length <= d) return o
			const E = [...o]
				.sort((B, p) => p.locations.length - B.locations.length)
				.slice(0, 3)
				.map((B) => B.url)
			return o.filter((B) => E.includes(B.url))
		},
		_ = async (o) => {
			u(1, (n = await o.data())),
				u(1, (n = s?.(n) ?? n)),
				u(2, (i = Object.entries(n.meta).filter(([d]) => !a.includes(d)))),
				Array.isArray(n.sub_results) &&
					(u(4, (c = n.sub_results?.[0]?.url === (n.meta?.url || n.url))),
					c ? u(3, (h = f(n.sub_results.slice(1), 3))) : u(3, (h = f([...n.sub_results], 3))))
		},
		C = (o = 30) => '. '.repeat(Math.floor(10 + Math.random() * o))
	return (
		(e.$$set = (o) => {
			'show_images' in o && u(0, (r = o.show_images)),
				'process_result' in o && u(6, (s = o.process_result)),
				'result' in o && u(7, (l = o.result))
		}),
		(e.$$.update = () => {
			e.$$.dirty & 128 && _(l)
		}),
		[r, n, i, h, c, C, s, l]
	)
}
var Ws = class extends me {
		constructor(e) {
			super(), de(this, e, Gs, Ks, fe, { show_images: 0, process_result: 6, result: 7 })
		}
	},
	Js = Ws
function Qe(e, t, u) {
	const r = e.slice()
	return (r[9] = t[u][0]), (r[10] = t[u][1]), (r[11] = t), (r[12] = u), r
}
function $e(e, t, u) {
	const r = e.slice()
	return (r[13] = t[u][0]), (r[14] = t[u][1]), (r[15] = t), (r[16] = u), r
}
function eu(e) {
	let t,
		u,
		r = e[3]('filters_label', e[4], e[5]) + '',
		s,
		l,
		a = Object.entries(e[1]),
		n = []
	for (let i = 0; i < a.length; i += 1) n[i] = ru(Qe(e, a, i))
	return {
		c() {
			;(t = A('fieldset')), (u = A('legend')), (s = S(r)), (l = b())
			for (let i = 0; i < n.length; i += 1) n[i].c()
			m(u, 'class', 'pagefind-ui__filter-panel-label svelte-1v2r7ls'),
				m(t, 'class', 'pagefind-ui__filter-panel svelte-1v2r7ls')
		},
		m(i, h) {
			T(i, t, h), R(t, u), R(u, s), R(t, l)
			for (let c = 0; c < n.length; c += 1) n[c] && n[c].m(t, null)
		},
		p(i, h) {
			if ((h & 56 && r !== (r = i[3]('filters_label', i[4], i[5]) + '') && y(s, r), h & 71)) {
				a = Object.entries(i[1])
				let c
				for (c = 0; c < a.length; c += 1) {
					const f = Qe(i, a, c)
					n[c] ? n[c].p(f, h) : ((n[c] = ru(f)), n[c].c(), n[c].m(t, null))
				}
				for (; c < n.length; c += 1) n[c].d(1)
				n.length = a.length
			}
		},
		d(i) {
			i && v(t), ne(n, i)
		}
	}
}
function uu(e) {
	let t,
		u,
		r,
		s,
		l,
		a,
		n,
		i,
		h = e[13] + '',
		c,
		f = e[14] + '',
		_,
		C,
		o,
		d,
		E,
		B
	function p() {
		e[8].call(u, e[9], e[13])
	}
	return {
		c() {
			;(t = A('div')),
				(u = A('input')),
				(a = b()),
				(n = A('label')),
				(i = new vs(!1)),
				(c = S(' (')),
				(_ = S(f)),
				(C = S(')')),
				(d = b()),
				m(u, 'class', 'pagefind-ui__filter-checkbox svelte-1v2r7ls'),
				m(u, 'type', 'checkbox'),
				m(u, 'id', (r = e[9] + '-' + e[13])),
				m(u, 'name', (s = e[9])),
				(u.__value = l = e[13]),
				(u.value = u.__value),
				(i.a = c),
				m(n, 'class', 'pagefind-ui__filter-label svelte-1v2r7ls'),
				m(n, 'for', (o = e[9] + '-' + e[13])),
				m(t, 'class', 'pagefind-ui__filter-value svelte-1v2r7ls'),
				K(t, 'pagefind-ui__filter-value--checked', e[0][`${e[9]}:${e[13]}`])
		},
		m(k, M) {
			T(k, t, M),
				R(t, u),
				(u.checked = e[0][`${e[9]}:${e[13]}`]),
				R(t, a),
				R(t, n),
				i.m(h, n),
				R(n, c),
				R(n, _),
				R(n, C),
				R(t, d),
				E || ((B = G(u, 'change', p)), (E = !0))
		},
		p(k, M) {
			;(e = k),
				M & 2 && r !== (r = e[9] + '-' + e[13]) && m(u, 'id', r),
				M & 2 && s !== (s = e[9]) && m(u, 'name', s),
				M & 2 && l !== (l = e[13]) && ((u.__value = l), (u.value = u.__value)),
				M & 3 && (u.checked = e[0][`${e[9]}:${e[13]}`]),
				M & 2 && h !== (h = e[13] + '') && i.p(h),
				M & 2 && f !== (f = e[14] + '') && y(_, f),
				M & 2 && o !== (o = e[9] + '-' + e[13]) && m(n, 'for', o),
				M & 3 && K(t, 'pagefind-ui__filter-value--checked', e[0][`${e[9]}:${e[13]}`])
		},
		d(k) {
			k && v(t), (E = !1), B()
		}
	}
}
function tu(e) {
	let t,
		u = (e[2] || e[14] || e[0][`${e[9]}:${e[13]}`]) && uu(e)
	return {
		c() {
			u && u.c(), (t = $())
		},
		m(r, s) {
			u && u.m(r, s), T(r, t, s)
		},
		p(r, s) {
			r[2] || r[14] || r[0][`${r[9]}:${r[13]}`]
				? u
					? u.p(r, s)
					: ((u = uu(r)), u.c(), u.m(t.parentNode, t))
				: u && (u.d(1), (u = null))
		},
		d(r) {
			u && u.d(r), r && v(t)
		}
	}
}
function ru(e) {
	let t,
		u,
		r = e[9].replace(/^(\w)/, su) + '',
		s,
		l,
		a,
		n = e[9] + '',
		i,
		h,
		c = Object.entries(e[10] || {}),
		f = []
	for (let _ = 0; _ < c.length; _ += 1) f[_] = tu($e(e, c, _))
	return {
		c() {
			;(t = A('details')),
				(u = A('summary')),
				(s = b()),
				(l = A('fieldset')),
				(a = A('legend')),
				(i = b())
			for (let _ = 0; _ < f.length; _ += 1) f[_].c()
			;(h = b()),
				m(u, 'class', 'pagefind-ui__filter-name svelte-1v2r7ls'),
				m(a, 'class', 'pagefind-ui__filter-group-label svelte-1v2r7ls'),
				m(l, 'class', 'pagefind-ui__filter-group svelte-1v2r7ls'),
				m(t, 'class', 'pagefind-ui__filter-block svelte-1v2r7ls'),
				(t.open = e[6])
		},
		m(_, C) {
			T(_, t, C), R(t, u), (u.innerHTML = r), R(t, s), R(t, l), R(l, a), (a.innerHTML = n), R(l, i)
			for (let o = 0; o < f.length; o += 1) f[o] && f[o].m(l, null)
			R(t, h)
		},
		p(_, C) {
			if (
				(C & 2 && r !== (r = _[9].replace(/^(\w)/, su) + '') && (u.innerHTML = r),
				C & 2 && n !== (n = _[9] + '') && (a.innerHTML = n),
				C & 7)
			) {
				c = Object.entries(_[10] || {})
				let o
				for (o = 0; o < c.length; o += 1) {
					const d = $e(_, c, o)
					f[o] ? f[o].p(d, C) : ((f[o] = tu(d)), f[o].c(), f[o].m(l, null))
				}
				for (; o < f.length; o += 1) f[o].d(1)
				f.length = c.length
			}
			C & 64 && (t.open = _[6])
		},
		d(_) {
			_ && v(t), ne(f, _)
		}
	}
}
function Zs(e) {
	let t = e[1] && Object.entries(e[1]).length,
		u,
		r = t && eu(e)
	return {
		c() {
			r && r.c(), (u = $())
		},
		m(s, l) {
			r && r.m(s, l), T(s, u, l)
		},
		p(s, [l]) {
			l & 2 && (t = s[1] && Object.entries(s[1]).length),
				t ? (r ? r.p(s, l) : ((r = eu(s)), r.c(), r.m(u.parentNode, u))) : r && (r.d(1), (r = null))
		},
		i: P,
		o: P,
		d(s) {
			r && r.d(s), s && v(u)
		}
	}
}
var su = (e) => e.toLocaleUpperCase()
function Ys(e, t, u) {
	let { available_filters: r = null } = t,
		{ show_empty_filters: s = !0 } = t,
		{ translate: l = () => '' } = t,
		{ automatic_translations: a = {} } = t,
		{ translations: n = {} } = t
	const i = {}
	let h = !1,
		c = !1
	function f(_, C) {
		;(i[`${_}:${C}`] = this.checked), u(0, i)
	}
	return (
		(e.$$set = (_) => {
			'available_filters' in _ && u(1, (r = _.available_filters)),
				'show_empty_filters' in _ && u(2, (s = _.show_empty_filters)),
				'translate' in _ && u(3, (l = _.translate)),
				'automatic_translations' in _ && u(4, (a = _.automatic_translations)),
				'translations' in _ && u(5, (n = _.translations))
		}),
		(e.$$.update = () => {
			if (e.$$.dirty & 130 && r && !h) {
				u(7, (h = !0))
				let _ = Object.entries(r || {})
				_.length === 1 && Object.entries(_[0][1])?.length <= 6 && u(6, (c = !0))
			}
		}),
		[i, r, s, l, a, n, c, h, f]
	)
}
var Xs = class extends me {
		constructor(e) {
			super(),
				de(this, e, Ys, Zs, fe, {
					available_filters: 1,
					show_empty_filters: 2,
					translate: 3,
					automatic_translations: 4,
					translations: 5,
					selected_filters: 0
				})
		}
		get selected_filters() {
			return this.$$.ctx[0]
		}
	},
	Qs = Xs,
	mu = {}
F(mu, {
	comments: () => Cu,
	default: () => $s,
	direction: () => Bu,
	strings: () => Ru,
	thanks_to: () => gu
})
var gu = 'Jan Claasen <jan@cloudcannon.com>',
	Cu = '',
	Bu = 'ltr',
	Ru = {
		placeholder: 'Soek',
		clear_search: 'Opruim',
		load_more: 'Laai nog resultate',
		search_label: 'Soek hierdie webwerf',
		filters_label: 'Filters',
		zero_results: 'Geen resultate vir [SEARCH_TERM]',
		many_results: '[COUNT] resultate vir [SEARCH_TERM]',
		one_result: '[COUNT] resultate vir [SEARCH_TERM]',
		alt_search:
			'Geen resultate vir [SEARCH_TERM]. Toon resultate vir [DIFFERENT_TERM] in plaas daarvan',
		search_suggestion:
			'Geen resultate vir [SEARCH_TERM]. Probeer eerder een van die volgende terme:',
		searching: 'Soek vir [SEARCH_TERM]'
	},
	$s = { thanks_to: gu, comments: Cu, direction: Bu, strings: Ru },
	pu = {}
F(pu, {
	comments: () => vu,
	default: () => el,
	direction: () => Tu,
	strings: () => ku,
	thanks_to: () => Au
})
var Au = 'Maruf Alom <mail@marufalom.com>',
	vu = '',
	Tu = 'ltr',
	ku = {
		placeholder: 'অনুসন্ধান করুন',
		clear_search: 'মুছে ফেলুন',
		load_more: 'আরো ফলাফল দেখুন',
		search_label: 'এই ওয়েবসাইটে অনুসন্ধান করুন',
		filters_label: 'ফিল্টার',
		zero_results: '[SEARCH_TERM] এর জন্য কিছু খুঁজে পাওয়া যায়নি',
		many_results: '[COUNT]-টি ফলাফল পাওয়া গিয়েছে [SEARCH_TERM] এর জন্য',
		one_result: '[COUNT]-টি ফলাফল পাওয়া গিয়েছে [SEARCH_TERM] এর জন্য',
		alt_search:
			'কোন কিছু খুঁজে পাওয়া যায়নি [SEARCH_TERM] এর জন্য. পরিবর্তে [DIFFERENT_TERM] এর জন্য দেখানো হচ্ছে',
		search_suggestion:
			'কোন কিছু খুঁজে পাওয়া যায়নি [SEARCH_TERM] এর বিষয়ে. নিন্মের বিষয়বস্তু খুঁজে দেখুন:',
		searching: 'অনুসন্ধান চলছে [SEARCH_TERM]...'
	},
	el = { thanks_to: Au, comments: vu, direction: Tu, strings: ku },
	Fu = {}
F(Fu, {
	comments: () => Mu,
	default: () => ul,
	direction: () => Su,
	strings: () => Hu,
	thanks_to: () => bu
})
var bu = 'Pablo Villaverde <https://github.com/pvillaverde>',
	Mu = '',
	Su = 'ltr',
	Hu = {
		placeholder: 'Cerca',
		clear_search: 'Netejar',
		load_more: 'Veure mées resultats',
		search_label: 'Cerca en aquest lloc',
		filters_label: 'Filtres',
		zero_results: 'No es van trobar resultats per [SEARCH_TERM]',
		many_results: '[COUNT] resultats trobats per [SEARCH_TERM]',
		one_result: '[COUNT] resultat trobat per [SEARCH_TERM]',
		alt_search:
			'No es van trobar resultats per [SEARCH_TERM]. Mostrant al seu lloc resultats per [DIFFERENT_TERM]',
		search_suggestion:
			'No es van trobar resultats per [SEARCH_TERM]. Proveu una de les cerques següents:',
		searching: 'Cercant [SEARCH_TERM]...'
	},
	ul = { thanks_to: bu, comments: Mu, direction: Su, strings: Hu },
	Du = {}
F(Du, {
	comments: () => Nu,
	default: () => tl,
	direction: () => yu,
	strings: () => zu,
	thanks_to: () => wu
})
var wu = 'Jonas Smedegaard <dr@jones.dk>',
	Nu = '',
	yu = 'ltr',
	zu = {
		placeholder: 'Søg',
		clear_search: 'Nulstil',
		load_more: 'Indlæs flere resultater',
		search_label: 'Søg på dette website',
		filters_label: 'Filtre',
		zero_results: 'Ingen resultater for [SEARCH_TERM]',
		many_results: '[COUNT] resultater for [SEARCH_TERM]',
		one_result: '[COUNT] resultat for [SEARCH_TERM]',
		alt_search:
			'Ingen resultater for [SEARCH_TERM]. Viser resultater for [DIFFERENT_TERM] i stedet',
		search_suggestion: 'Ingen resultater for [SEARCH_TERM]. Prøv et af disse søgeord i stedet:',
		searching: 'Søger efter [SEARCH_TERM]...'
	},
	tl = { thanks_to: wu, comments: Nu, direction: yu, strings: zu },
	ju = {}
F(ju, {
	comments: () => Uu,
	default: () => rl,
	direction: () => Iu,
	strings: () => Pu,
	thanks_to: () => Ou
})
var Ou = 'Jan Claasen <jan@cloudcannon.com>',
	Uu = '',
	Iu = 'ltr',
	Pu = {
		placeholder: 'Suche',
		clear_search: 'Löschen',
		load_more: 'Mehr Ergebnisse laden',
		search_label: 'Suche diese Seite',
		filters_label: 'Filter',
		zero_results: 'Keine Ergebnisse für [SEARCH_TERM]',
		many_results: '[COUNT] Ergebnisse für [SEARCH_TERM]',
		one_result: '[COUNT] Ergebnis für [SEARCH_TERM]',
		alt_search:
			'Keine Ergebnisse für [SEARCH_TERM]. Stattdessen werden Ergebnisse für [DIFFERENT_TERM] angezeigt',
		search_suggestion:
			'Keine Ergebnisse für [SEARCH_TERM]. Versuchen Sie eine der folgenden Suchen:',
		searching: 'Suche für [SEARCH_TERM]'
	},
	rl = { thanks_to: Ou, comments: Uu, direction: Iu, strings: Pu },
	Lu = {}
F(Lu, {
	comments: () => xu,
	default: () => sl,
	direction: () => Vu,
	strings: () => Ku,
	thanks_to: () => qu
})
var qu = 'Liam Bigelow <liam@cloudcannon.com>',
	xu = '',
	Vu = 'ltr',
	Ku = {
		placeholder: 'Search',
		clear_search: 'Clear',
		load_more: 'Load more results',
		search_label: 'Search this site',
		filters_label: 'Filters',
		zero_results: 'No results for [SEARCH_TERM]',
		many_results: '[COUNT] results for [SEARCH_TERM]',
		one_result: '[COUNT] result for [SEARCH_TERM]',
		alt_search: 'No results for [SEARCH_TERM]. Showing results for [DIFFERENT_TERM] instead',
		search_suggestion: 'No results for [SEARCH_TERM]. Try one of the following searches:',
		searching: 'Searching for [SEARCH_TERM]...'
	},
	sl = { thanks_to: qu, comments: xu, direction: Vu, strings: Ku },
	Gu = {}
F(Gu, {
	comments: () => Ju,
	default: () => ll,
	direction: () => Zu,
	strings: () => Yu,
	thanks_to: () => Wu
})
var Wu = 'Pablo Villaverde <https://github.com/pvillaverde>',
	Ju = '',
	Zu = 'ltr',
	Yu = {
		placeholder: 'Buscar',
		clear_search: 'Limpiar',
		load_more: 'Ver más resultados',
		search_label: 'Buscar en este sitio',
		filters_label: 'Filtros',
		zero_results: 'No se encontraron resultados para [SEARCH_TERM]',
		many_results: '[COUNT] resultados encontrados para [SEARCH_TERM]',
		one_result: '[COUNT] resultado encontrado para [SEARCH_TERM]',
		alt_search:
			'No se encontraron resultados para [SEARCH_TERM]. Mostrando en su lugar resultados para [DIFFERENT_TERM]',
		search_suggestion:
			'No se encontraron resultados para [SEARCH_TERM]. Prueba una de las siguientes búsquedas:',
		searching: 'Buscando [SEARCH_TERM]...'
	},
	ll = { thanks_to: Wu, comments: Ju, direction: Zu, strings: Yu },
	Xu = {}
F(Xu, {
	comments: () => $u,
	default: () => al,
	direction: () => et,
	strings: () => ut,
	thanks_to: () => Qu
})
var Qu = 'Valtteri Laitinen <dev@valtlai.fi>',
	$u = '',
	et = 'ltr',
	ut = {
		placeholder: 'Haku',
		clear_search: 'Tyhjennä',
		load_more: 'Lataa lisää tuloksia',
		search_label: 'Hae tältä sivustolta',
		filters_label: 'Suodattimet',
		zero_results: 'Ei tuloksia haulle [SEARCH_TERM]',
		many_results: '[COUNT] tulosta haulle [SEARCH_TERM]',
		one_result: '[COUNT] tulos haulle [SEARCH_TERM]',
		alt_search:
			'Ei tuloksia haulle [SEARCH_TERM]. Näytetään tulokset sen sijaan haulle [DIFFERENT_TERM]',
		search_suggestion: 'Ei tuloksia haulle [SEARCH_TERM]. Kokeile jotain seuraavista:',
		searching: 'Haetaan [SEARCH_TERM]...'
	},
	al = { thanks_to: Qu, comments: $u, direction: et, strings: ut },
	tt = {}
F(tt, {
	comments: () => st,
	default: () => nl,
	direction: () => lt,
	strings: () => at,
	thanks_to: () => rt
})
var rt = 'Nicolas Friedli <nicolas@theologique.ch>',
	st = '',
	lt = 'ltr',
	at = {
		placeholder: 'Rechercher',
		clear_search: 'Nettoyer',
		load_more: 'Charger plus de résultats',
		search_label: 'Recherche sur ce site',
		filters_label: 'Filtres',
		zero_results: 'Pas de résultat pour [SEARCH_TERM]',
		many_results: '[COUNT] résultats pour [SEARCH_TERM]',
		one_result: '[COUNT] résultat pour [SEARCH_TERM]',
		alt_search:
			'Pas de résultat pour [SEARCH_TERM]. Montre les résultats pour [DIFFERENT_TERM] à la place',
		search_suggestion: 'Pas de résultat pour [SEARCH_TERM]. Essayer une des recherches suivantes:',
		searching: 'Recherche [SEARCH_TERM]...'
	},
	nl = { thanks_to: rt, comments: st, direction: lt, strings: at },
	nt = {}
F(nt, {
	comments: () => ot,
	default: () => il,
	direction: () => _t,
	strings: () => ct,
	thanks_to: () => it
})
var it = 'Pablo Villaverde <https://github.com/pvillaverde>',
	ot = '',
	_t = 'ltr',
	ct = {
		placeholder: 'Buscar',
		clear_search: 'Limpar',
		load_more: 'Ver máis resultados',
		search_label: 'Buscar neste sitio',
		filters_label: 'Filtros',
		zero_results: 'Non se atoparon resultados para [SEARCH_TERM]',
		many_results: '[COUNT] resultados atopados para [SEARCH_TERM]',
		one_result: '[COUNT] resultado atopado para [SEARCH_TERM]',
		alt_search:
			'Non se atoparon resultados para [SEARCH_TERM]. Amosando no seu lugar resultados para [DIFFERENT_TERM]',
		search_suggestion:
			'Non se atoparon resultados para [SEARCH_TERM]. Probe unha das seguintes pesquisas:',
		searching: 'Buscando [SEARCH_TERM]...'
	},
	il = { thanks_to: it, comments: ot, direction: _t, strings: ct },
	ft = {}
F(ft, {
	comments: () => ht,
	default: () => ol,
	direction: () => dt,
	strings: () => mt,
	thanks_to: () => Et
})
var Et = 'Amit Yadav <amit@thetechbasket.com>',
	ht = '',
	dt = 'ltr',
	mt = {
		placeholder: 'खोजें',
		clear_search: 'साफ करें',
		load_more: 'और अधिक परिणाम लोड करें',
		search_label: 'इस साइट में खोजें',
		filters_label: 'फ़िल्टर',
		zero_results: 'कोई परिणाम [SEARCH_TERM] के लिए नहीं मिला',
		many_results: '[COUNT] परिणाम [SEARCH_TERM] के लिए मिले',
		one_result: '[COUNT] परिणाम [SEARCH_TERM] के लिए मिला',
		alt_search:
			'[SEARCH_TERM] के लिए कोई परिणाम नहीं मिला। इसके बजाय [DIFFERENT_TERM] के लिए परिणाम दिखा रहा है',
		search_suggestion:
			'[SEARCH_TERM] के लिए कोई परिणाम नहीं मिला। निम्नलिखित खोजों में से कोई एक आज़माएं:',
		searching: '[SEARCH_TERM] की खोज की जा रही है...'
	},
	ol = { thanks_to: Et, comments: ht, direction: dt, strings: mt },
	gt = {}
F(gt, {
	comments: () => Bt,
	default: () => _l,
	direction: () => Rt,
	strings: () => pt,
	thanks_to: () => Ct
})
var Ct = 'Diomed <https://github.com/diomed>',
	Bt = '',
	Rt = 'ltr',
	pt = {
		placeholder: 'Traži',
		clear_search: 'Očisti',
		load_more: 'Učitaj više rezultata',
		search_label: 'Pretraži ovu stranicu',
		filters_label: 'Filteri',
		zero_results: 'Nema rezultata za [SEARCH_TERM]',
		many_results: '[COUNT] rezultata za [SEARCH_TERM]',
		one_result: '[COUNT] rezultat za [SEARCH_TERM]',
		alt_search: 'Nema rezultata za [SEARCH_TERM]. Prikazujem rezultate za [DIFFERENT_TERM]',
		search_suggestion: 'Nema rezultata za [SEARCH_TERM]. Pokušaj s jednom od ovih pretraga:',
		searching: 'Pretražujem [SEARCH_TERM]...'
	},
	_l = { thanks_to: Ct, comments: Bt, direction: Rt, strings: pt },
	At = {}
F(At, {
	comments: () => Tt,
	default: () => cl,
	direction: () => kt,
	strings: () => Ft,
	thanks_to: () => vt
})
var vt = 'Adam Laki <info@adamlaki.com>',
	Tt = '',
	kt = 'ltr',
	Ft = {
		placeholder: 'Keresés',
		clear_search: 'Törlés',
		load_more: 'További találatok betöltése',
		search_label: 'Keresés az oldalon',
		filters_label: 'Szűrés',
		zero_results: 'Nincs találat a(z) [SEARCH_TERM] kifejezésre',
		many_results: '[COUNT] db találat a(z) [SEARCH_TERM] kifejezésre',
		one_result: '[COUNT] db találat a(z) [SEARCH_TERM] kifejezésre',
		alt_search:
			'Nincs találat a(z) [SEARCH_TERM] kifejezésre. Találatok mutatása inkább a(z) [DIFFERENT_TERM] kifejezésre',
		search_suggestion:
			'Nincs találat a(z) [SEARCH_TERM] kifejezésre. Próbáld meg a következő keresések egyikét:',
		searching: 'Keresés a(z) [SEARCH_TERM] kifejezésre...'
	},
	cl = { thanks_to: vt, comments: Tt, direction: kt, strings: Ft },
	bt = {}
F(bt, {
	comments: () => St,
	default: () => fl,
	direction: () => Ht,
	strings: () => Dt,
	thanks_to: () => Mt
})
var Mt = 'Nixentric',
	St = '',
	Ht = 'ltr',
	Dt = {
		placeholder: 'Cari',
		clear_search: 'Bersihkan',
		load_more: 'Muat lebih banyak hasil',
		search_label: 'Telusuri situs ini',
		filters_label: 'Filter',
		zero_results: '[SEARCH_TERM] tidak ditemukan',
		many_results: 'Ditemukan [COUNT] hasil untuk [SEARCH_TERM]',
		one_result: 'Ditemukan [COUNT] hasil untuk [SEARCH_TERM]',
		alt_search:
			'[SEARCH_TERM] tidak ditemukan. Menampilkan hasil [DIFFERENT_TERM] sebagai gantinya',
		search_suggestion: '[SEARCH_TERM] tidak ditemukan. Coba salah satu pencarian berikut ini:',
		searching: 'Mencari [SEARCH_TERM]...'
	},
	fl = { thanks_to: Mt, comments: St, direction: Ht, strings: Dt },
	wt = {}
F(wt, {
	comments: () => yt,
	default: () => El,
	direction: () => zt,
	strings: () => jt,
	thanks_to: () => Nt
})
var Nt = 'Cosette Bruhns Alonso, Andrew Janco <apjanco@upenn.edu>',
	yt = '',
	zt = 'ltr',
	jt = {
		placeholder: 'Cerca',
		clear_search: 'Cancella la cronologia',
		load_more: 'Mostra più risultati',
		search_label: 'Cerca nel sito',
		filters_label: 'Filtri di ricerca',
		zero_results: 'Nessun risultato per [SEARCH_TERM]',
		many_results: '[COUNT] risultati per [SEARCH_TERM]',
		one_result: '[COUNT] risultato per [SEARCH_TERM]',
		alt_search:
			'Nessun risultato per [SEARCH_TERM]. Mostrando risultati per [DIFFERENT_TERM] come alternativa.',
		search_suggestion: 'Nessun risultato per [SEARCH_TERM]. Prova una delle seguenti ricerche:',
		searching: 'Cercando [SEARCH_TERM]...'
	},
	El = { thanks_to: Nt, comments: yt, direction: zt, strings: jt },
	Ot = {}
F(Ot, {
	comments: () => It,
	default: () => hl,
	direction: () => Pt,
	strings: () => Lt,
	thanks_to: () => Ut
})
var Ut = 'Tate',
	It = '',
	Pt = 'ltr',
	Lt = {
		placeholder: '検索',
		clear_search: '消す',
		load_more: 'もっと読み込む',
		search_label: 'このサイトを検索',
		filters_label: 'フィルタ',
		zero_results: '[SEARCH_TERM]の検索に一致する件はありませんでした',
		many_results: '[SEARCH_TERM]の[COUNT]件の検索結果',
		one_result: '[SEARCH_TERM]の[COUNT]件の検索結果',
		alt_search:
			'[SEARCH_TERM]の検索に一致する件はありませんでした。[DIFFERENT_TERM]の検索結果を表示しています',
		search_suggestion:
			'[SEARCH_TERM]の検索に一致する件はありませんでした。次のいずれかの検索を試してください',
		searching: '[SEARCH_TERM]を検索しています'
	},
	hl = { thanks_to: Ut, comments: It, direction: Pt, strings: Lt },
	qt = {}
F(qt, {
	comments: () => Vt,
	default: () => dl,
	direction: () => Kt,
	strings: () => Gt,
	thanks_to: () => xt
})
var xt = '',
	Vt = '',
	Kt = 'ltr',
	Gt = {
		placeholder: 'Rapu',
		clear_search: 'Whakakore',
		load_more: 'Whakauta ētahi otinga kē',
		search_label: 'Rapu',
		filters_label: 'Tātari',
		zero_results: 'Otinga kore ki [SEARCH_TERM]',
		many_results: '[COUNT] otinga ki [SEARCH_TERM]',
		one_result: '[COUNT] otinga ki [SEARCH_TERM]',
		alt_search: 'Otinga kore ki [SEARCH_TERM]. Otinga kē ki [DIFFERENT_TERM]',
		search_suggestion: 'Otinga kore ki [SEARCH_TERM]. whakamātau ki ngā mea atu:',
		searching: 'Rapu ki [SEARCH_TERM]...'
	},
	dl = { thanks_to: xt, comments: Vt, direction: Kt, strings: Gt },
	Wt = {}
F(Wt, {
	comments: () => Zt,
	default: () => ml,
	direction: () => Yt,
	strings: () => Xt,
	thanks_to: () => Jt
})
var Jt = 'Paul van Brouwershaven',
	Zt = '',
	Yt = 'ltr',
	Xt = {
		placeholder: 'Zoeken',
		clear_search: 'Reset',
		load_more: 'Meer resultaten laden',
		search_label: 'Doorzoek deze site',
		filters_label: 'Filters',
		zero_results: 'Geen resultaten voor [SEARCH_TERM]',
		many_results: '[COUNT] resultaten voor [SEARCH_TERM]',
		one_result: '[COUNT] resultaat voor [SEARCH_TERM]',
		alt_search:
			'Geen resultaten voor [SEARCH_TERM]. In plaats daarvan worden resultaten voor [DIFFERENT_TERM] weergegeven',
		search_suggestion:
			'Geen resultaten voor [SEARCH_TERM]. Probeer een van de volgende zoekopdrachten:',
		searching: 'Zoeken naar [SEARCH_TERM]...'
	},
	ml = { thanks_to: Jt, comments: Zt, direction: Yt, strings: Xt },
	Qt = {}
F(Qt, {
	comments: () => er,
	default: () => gl,
	direction: () => ur,
	strings: () => tr,
	thanks_to: () => $t
})
var $t = 'Christopher Wingate',
	er = '',
	ur = 'ltr',
	tr = {
		placeholder: 'Søk',
		clear_search: 'Fjern',
		load_more: 'Last flere resultater',
		search_label: 'Søk på denne siden',
		filters_label: 'Filtre',
		zero_results: 'Ingen resultater for [SEARCH_TERM]',
		many_results: '[COUNT] resultater for [SEARCH_TERM]',
		one_result: '[COUNT] resultat for [SEARCH_TERM]',
		alt_search:
			'Ingen resultater for [SEARCH_TERM]. Viser resultater for [DIFFERENT_TERM] i stedet',
		search_suggestion: 'Ingen resultater for [SEARCH_TERM]. Prøv en av disse søkeordene i stedet:',
		searching: 'Søker etter [SEARCH_TERM]'
	},
	gl = { thanks_to: $t, comments: er, direction: ur, strings: tr },
	rr = {}
F(rr, {
	comments: () => lr,
	default: () => Cl,
	direction: () => ar,
	strings: () => nr,
	thanks_to: () => sr
})
var sr = '',
	lr = '',
	ar = 'ltr',
	nr = {
		placeholder: 'Szukaj',
		clear_search: 'Wyczyść',
		load_more: 'Załaduj więcej',
		search_label: 'Przeszukaj tę stronę',
		filters_label: 'Filtry',
		zero_results: 'Brak wyników dla [SEARCH_TERM]',
		many_results: '[COUNT] wyników dla [SEARCH_TERM]',
		one_result: '[COUNT] wynik dla [SEARCH_TERM]',
		alt_search: 'Brak wyników dla [SEARCH_TERM]. Wyświetlam wyniki dla [DIFFERENT_TERM]',
		search_suggestion: 'Brak wyników dla [SEARCH_TERM]. Pokrewne wyniki wyszukiwania:',
		searching: 'Szukam [SEARCH_TERM]...'
	},
	Cl = { thanks_to: sr, comments: lr, direction: ar, strings: nr },
	ir = {}
F(ir, {
	comments: () => _r,
	default: () => Bl,
	direction: () => cr,
	strings: () => fr,
	thanks_to: () => or
})
var or = 'Jonatah',
	_r = '',
	cr = 'ltr',
	fr = {
		placeholder: 'Pesquisar',
		clear_search: 'Limpar',
		load_more: 'Ver mais resultados',
		search_label: 'Pesquisar',
		filters_label: 'Filtros',
		zero_results: 'Nenhum resultado encontrado para [SEARCH_TERM]',
		many_results: '[COUNT] resultados encontrados para [SEARCH_TERM]',
		one_result: '[COUNT] resultado encontrado para [SEARCH_TERM]',
		alt_search:
			'Nenhum resultado encontrado para [SEARCH_TERM]. Exibindo resultados para [DIFFERENT_TERM]',
		search_suggestion:
			'Nenhum resultado encontrado para [SEARCH_TERM]. Tente uma das seguintes pesquisas:',
		searching: 'Pesquisando por [SEARCH_TERM]...'
	},
	Bl = { thanks_to: or, comments: _r, direction: cr, strings: fr },
	Er = {}
F(Er, {
	comments: () => dr,
	default: () => Rl,
	direction: () => mr,
	strings: () => gr,
	thanks_to: () => hr
})
var hr = 'Aleksandr Gordeev',
	dr = '',
	mr = 'ltr',
	gr = {
		placeholder: 'Поиск',
		clear_search: 'Очистить поле',
		load_more: 'Загрузить еще',
		search_label: 'Поиск по сайту',
		filters_label: 'Фильтры',
		zero_results: 'Ничего не найдено по запросу: [SEARCH_TERM]',
		many_results: '[COUNT] результатов по запросу: [SEARCH_TERM]',
		one_result: '[COUNT] результат по запросу: [SEARCH_TERM]',
		alt_search:
			'Ничего не найдено по запросу: [SEARCH_TERM]. Показаны результаты по запросу: [DIFFERENT_TERM]',
		search_suggestion:
			'Ничего не найдено по запросу: [SEARCH_TERM]. Попробуйте один из следующих вариантов',
		searching: 'Поиск по запросу: [SEARCH_TERM]'
	},
	Rl = { thanks_to: hr, comments: dr, direction: mr, strings: gr },
	Cr = {}
F(Cr, {
	comments: () => Rr,
	default: () => pl,
	direction: () => pr,
	strings: () => Ar,
	thanks_to: () => Br
})
var Br = 'Andrija Sagicc',
	Rr = '',
	pr = 'ltr',
	Ar = {
		placeholder: 'Претрага',
		clear_search: 'Брисање',
		load_more: 'Приказ више резултата',
		search_label: 'Претрага сајта',
		filters_label: 'Филтери',
		zero_results: 'Нема резултата за [SEARCH_TERM]',
		many_results: '[COUNT] резултата за [SEARCH_TERM]',
		one_result: '[COUNT] резултата за [SEARCH_TERM]',
		alt_search: 'Нема резултата за [SEARCH_TERM]. Приказ додатник резултата за [DIFFERENT_TERM]',
		search_suggestion: 'Нема резултата за [SEARCH_TERM]. Покушајте са неком од следећих претрага:',
		searching: 'Претрага термина [SEARCH_TERM]...'
	},
	pl = { thanks_to: Br, comments: Rr, direction: pr, strings: Ar },
	vr = {}
F(vr, {
	comments: () => kr,
	default: () => Al,
	direction: () => Fr,
	strings: () => br,
	thanks_to: () => Tr
})
var Tr = 'Montazar Al-Jaber <montazar@nanawee.tech>',
	kr = '',
	Fr = 'ltr',
	br = {
		placeholder: 'Sök',
		clear_search: 'Rensa',
		load_more: 'Visa fler träffar',
		search_label: 'Sök på denna sida',
		filters_label: 'Filter',
		zero_results: '[SEARCH_TERM] gav inga träffar',
		many_results: '[SEARCH_TERM] gav [COUNT] träffar',
		one_result: '[SEARCH_TERM] gav [COUNT] träff',
		alt_search: '[SEARCH_TERM] gav inga träffar. Visar resultat för [DIFFERENT_TERM] istället',
		search_suggestion: '[SEARCH_TERM] gav inga träffar. Försök igen med en av följande sökord:',
		searching: 'Söker efter [SEARCH_TERM]...'
	},
	Al = { thanks_to: Tr, comments: kr, direction: Fr, strings: br },
	Mr = {}
F(Mr, {
	comments: () => Hr,
	default: () => vl,
	direction: () => Dr,
	strings: () => wr,
	thanks_to: () => Sr
})
var Sr = '',
	Hr = '',
	Dr = 'ltr',
	wr = {
		placeholder: 'தேடுக',
		clear_search: 'அழிக்குக',
		load_more: 'மேலும் முடிவுகளைக் காட்டுக',
		search_label: 'இந்த தளத்தில் தேடுக',
		filters_label: 'வடிகட்டல்கள்',
		zero_results: '[SEARCH_TERM] க்கான முடிவுகள் இல்லை',
		many_results: '[SEARCH_TERM] க்கான [COUNT] முடிவுகள்',
		one_result: '[SEARCH_TERM] க்கான முடிவு',
		alt_search:
			'[SEARCH_TERM] இத்தேடலுக்கான முடிவுகள் இல்லை, இந்த தேடல்களுக்கான ஒத்த முடிவுகள் [DIFFERENT_TERM]',
		search_suggestion:
			'[SEARCH_TERM] இத் தேடலுக்கான முடிவுகள் இல்லை.இதற்கு பதிலீடான தேடல்களை தேடுக:',
		searching: '[SEARCH_TERM] தேடப்படுகின்றது'
	},
	vl = { thanks_to: Sr, comments: Hr, direction: Dr, strings: wr },
	Nr = {}
F(Nr, {
	comments: () => zr,
	default: () => Tl,
	direction: () => jr,
	strings: () => Or,
	thanks_to: () => yr
})
var yr = 'Taylan Özgür Bildik',
	zr = '',
	jr = 'ltr',
	Or = {
		placeholder: 'Araştır',
		clear_search: 'Temizle',
		load_more: 'Daha fazla sonuç',
		search_label: 'Site genelinde arama',
		filters_label: 'Filtreler',
		zero_results: '[SEARCH_TERM] için sonuç yok',
		many_results: '[SEARCH_TERM] için [COUNT] sonuç bulundu',
		one_result: '[SEARCH_TERM] için [COUNT] sonuç bulundu',
		alt_search:
			'[SEARCH_TERM] için sonuç yok. Bunun yerine [DIFFERENT_TERM] için sonuçlar gösteriliyor',
		search_suggestion:
			'[SEARCH_TERM] için sonuç yok. Alternatif olarak aşağıdaki kelimelerden birini deneyebilirsiniz:',
		searching: '[SEARCH_TERM] araştırılıyor...'
	},
	Tl = { thanks_to: yr, comments: zr, direction: jr, strings: Or },
	Ur = {}
F(Ur, {
	comments: () => Pr,
	default: () => kl,
	direction: () => Lr,
	strings: () => qr,
	thanks_to: () => Ir
})
var Ir = 'Long Nhat Nguyen',
	Pr = '',
	Lr = 'ltr',
	qr = {
		placeholder: 'Tìm kiếm',
		clear_search: 'Xóa',
		load_more: 'Nhiều kết quả hơn',
		search_label: 'Tìm kiếm trong trang này',
		filters_label: 'Bộ lọc',
		zero_results: 'Không tìm thấy kết quả cho [SEARCH_TERM]',
		many_results: '[COUNT] kết quả cho [SEARCH_TERM]',
		one_result: '[COUNT] kết quả cho [SEARCH_TERM]',
		alt_search:
			'Không tìm thấy kết quả cho [SEARCH_TERM]. Kiểm thị kết quả thay thế với [DIFFERENT_TERM]',
		search_suggestion: 'Không tìm thấy kết quả cho [SEARCH_TERM]. Thử một trong các tìm kiếm:',
		searching: 'Đang tìm kiếm cho [SEARCH_TERM]...'
	},
	kl = { thanks_to: Ir, comments: Pr, direction: Lr, strings: qr },
	xr = {}
F(xr, {
	comments: () => Kr,
	default: () => Fl,
	direction: () => Gr,
	strings: () => Wr,
	thanks_to: () => Vr
})
var Vr = 'Amber Song',
	Kr = '',
	Gr = 'ltr',
	Wr = {
		placeholder: '搜索',
		clear_search: '清除',
		load_more: '加载更多结果',
		search_label: '站内搜索',
		filters_label: '筛选',
		zero_results: '未找到 [SEARCH_TERM] 的相关结果',
		many_results: '找到 [COUNT] 个 [SEARCH_TERM] 的相关结果',
		one_result: '找到 [COUNT] 个 [SEARCH_TERM] 的相关结果',
		alt_search: '未找到 [SEARCH_TERM] 的相关结果。改为显示 [DIFFERENT_TERM] 的相关结果',
		search_suggestion: '未找到 [SEARCH_TERM] 的相关结果。请尝试以下搜索。',
		searching: '正在搜索 [SEARCH_TERM]...'
	},
	Fl = { thanks_to: Vr, comments: Kr, direction: Gr, strings: Wr },
	Jr = {}
F(Jr, {
	comments: () => Yr,
	default: () => bl,
	direction: () => Xr,
	strings: () => Qr,
	thanks_to: () => Zr
})
var Zr = 'Amber Song',
	Yr = '',
	Xr = 'ltr',
	Qr = {
		placeholder: '搜索',
		clear_search: '清除',
		load_more: '加載更多結果',
		search_label: '站內搜索',
		filters_label: '篩選',
		zero_results: '未找到 [SEARCH_TERM] 的相關結果',
		many_results: '找到 [COUNT] 個 [SEARCH_TERM] 的相關結果',
		one_result: '找到 [COUNT] 個 [SEARCH_TERM] 的相關結果',
		alt_search: '未找到 [SEARCH_TERM] 的相關結果。改為顯示 [DIFFERENT_TERM] 的相關結果',
		search_suggestion: '未找到 [SEARCH_TERM] 的相關結果。請嘗試以下搜索。',
		searching: '正在搜索 [SEARCH_TERM]...'
	},
	bl = { thanks_to: Zr, comments: Yr, direction: Xr, strings: Qr },
	$r = {}
F($r, {
	comments: () => us,
	default: () => Ml,
	direction: () => ts,
	strings: () => rs,
	thanks_to: () => es
})
var es = 'Amber Song',
	us = '',
	ts = 'ltr',
	rs = {
		placeholder: '搜索',
		clear_search: '清除',
		load_more: '加载更多结果',
		search_label: '站内搜索',
		filters_label: '筛选',
		zero_results: '未找到 [SEARCH_TERM] 的相关结果',
		many_results: '找到 [COUNT] 个 [SEARCH_TERM] 的相关结果',
		one_result: '找到 [COUNT] 个 [SEARCH_TERM] 的相关结果',
		alt_search: '未找到 [SEARCH_TERM] 的相关结果。改为显示 [DIFFERENT_TERM] 的相关结果',
		search_suggestion: '未找到 [SEARCH_TERM] 的相关结果。请尝试以下搜索。',
		searching: '正在搜索 [SEARCH_TERM]...'
	},
	Ml = { thanks_to: es, comments: us, direction: ts, strings: rs },
	Sl = [
		mu,
		pu,
		Fu,
		Du,
		ju,
		Lu,
		Gu,
		Xu,
		tt,
		nt,
		ft,
		gt,
		At,
		bt,
		wt,
		Ot,
		qt,
		Wt,
		Qt,
		rr,
		ir,
		Er,
		Cr,
		vr,
		Mr,
		Nr,
		Ur,
		xr,
		Jr,
		$r
	],
	Hl = Sl,
	Dl = [
		'../../translations/af.json',
		'../../translations/bn.json',
		'../../translations/ca.json',
		'../../translations/da.json',
		'../../translations/de.json',
		'../../translations/en.json',
		'../../translations/es.json',
		'../../translations/fi.json',
		'../../translations/fr.json',
		'../../translations/gl.json',
		'../../translations/hi.json',
		'../../translations/hr.json',
		'../../translations/hu.json',
		'../../translations/id.json',
		'../../translations/it.json',
		'../../translations/ja.json',
		'../../translations/mi.json',
		'../../translations/nl.json',
		'../../translations/no.json',
		'../../translations/pl.json',
		'../../translations/pt.json',
		'../../translations/ru.json',
		'../../translations/sr.json',
		'../../translations/sv.json',
		'../../translations/ta.json',
		'../../translations/tr.json',
		'../../translations/vi.json',
		'../../translations/zh-cn.json',
		'../../translations/zh-tw.json',
		'../../translations/zh.json'
	]
function lu(e, t, u) {
	const r = e.slice()
	return (r[48] = t[u]), r
}
function au(e) {
	let t, u, r
	function s(a) {
		e[34](a)
	}
	let l = {
		show_empty_filters: e[4],
		available_filters: e[16],
		translate: e[18],
		automatic_translations: e[17],
		translations: e[5]
	}
	return (
		e[7] !== void 0 && (l.selected_filters = e[7]),
		(t = new Qs({ props: l })),
		se.push(() => Ns(t, 'selected_filters', s)),
		{
			c() {
				Te(t.$$.fragment)
			},
			m(a, n) {
				Ee(t, a, n), (r = !0)
			},
			p(a, n) {
				const i = {}
				n[0] & 16 && (i.show_empty_filters = a[4]),
					n[0] & 65536 && (i.available_filters = a[16]),
					n[0] & 131072 && (i.automatic_translations = a[17]),
					n[0] & 32 && (i.translations = a[5]),
					!u && n[0] & 128 && ((u = !0), (i.selected_filters = a[7]), Ms(() => (u = !1))),
					t.$set(i)
			},
			i(a) {
				r || (N(t.$$.fragment, a), (r = !0))
			},
			o(a) {
				I(t.$$.fragment, a), (r = !1)
			},
			d(a) {
				he(t, a)
			}
		}
	)
}
function nu(e) {
	let t, u, r, s
	const l = [Nl, wl],
		a = []
	function n(i, h) {
		return i[12] ? 0 : 1
	}
	return (
		(u = n(e)),
		(r = a[u] = l[u](e)),
		{
			c() {
				;(t = A('div')), r.c(), m(t, 'class', 'pagefind-ui__results-area svelte-e9gkc3')
			},
			m(i, h) {
				T(i, t, h), a[u].m(t, null), (s = !0)
			},
			p(i, h) {
				let c = u
				;(u = n(i)),
					u === c
						? a[u].p(i, h)
						: (le(),
						  I(a[c], 1, 1, () => {
								a[c] = null
						  }),
						  ae(),
						  (r = a[u]),
						  r ? r.p(i, h) : ((r = a[u] = l[u](i)), r.c()),
						  N(r, 1),
						  r.m(t, null))
			},
			i(i) {
				s || (N(r), (s = !0))
			},
			o(i) {
				I(r), (s = !1)
			},
			d(i) {
				i && v(t), a[u].d()
			}
		}
	)
}
function wl(e) {
	let t,
		u,
		r,
		s = [],
		l = new Map(),
		a,
		n,
		i
	function h(d, E) {
		return d[11].results.length === 0 ? jl : d[11].results.length === 1 ? zl : yl
	}
	let c = h(e),
		f = c(e),
		_ = e[11].results.slice(0, e[15])
	const C = (d) => d[48].id
	for (let d = 0; d < _.length; d += 1) {
		let E = lu(e, _, d),
			B = C(E)
		l.set(B, (s[d] = iu(B, E)))
	}
	let o = e[11].results.length > e[15] && ou(e)
	return {
		c() {
			;(t = A('p')), f.c(), (u = b()), (r = A('ol'))
			for (let d = 0; d < s.length; d += 1) s[d].c()
			;(a = b()),
				o && o.c(),
				(n = $()),
				m(t, 'class', 'pagefind-ui__message svelte-e9gkc3'),
				m(r, 'class', 'pagefind-ui__results svelte-e9gkc3')
		},
		m(d, E) {
			T(d, t, E), f.m(t, null), T(d, u, E), T(d, r, E)
			for (let B = 0; B < s.length; B += 1) s[B] && s[B].m(r, null)
			T(d, a, E), o && o.m(d, E), T(d, n, E), (i = !0)
		},
		p(d, E) {
			c === (c = h(d)) && f ? f.p(d, E) : (f.d(1), (f = c(d)), f && (f.c(), f.m(t, null))),
				E[0] & 34830 &&
					((_ = d[11].results.slice(0, d[15])),
					le(),
					(s = ws(s, E, C, 1, d, _, l, r, Ds, iu, null, lu)),
					ae()),
				d[11].results.length > d[15]
					? o
						? o.p(d, E)
						: ((o = ou(d)), o.c(), o.m(n.parentNode, n))
					: o && (o.d(1), (o = null))
		},
		i(d) {
			if (!i) {
				for (let E = 0; E < _.length; E += 1) N(s[E])
				i = !0
			}
		},
		o(d) {
			for (let E = 0; E < s.length; E += 1) I(s[E])
			i = !1
		},
		d(d) {
			d && v(t), f.d(), d && v(u), d && v(r)
			for (let E = 0; E < s.length; E += 1) s[E].d()
			d && v(a), o && o.d(d), d && v(n)
		}
	}
}
function Nl(e) {
	let t,
		u = e[14] && _u(e)
	return {
		c() {
			u && u.c(), (t = $())
		},
		m(r, s) {
			u && u.m(r, s), T(r, t, s)
		},
		p(r, s) {
			r[14]
				? u
					? u.p(r, s)
					: ((u = _u(r)), u.c(), u.m(t.parentNode, t))
				: u && (u.d(1), (u = null))
		},
		i: P,
		o: P,
		d(r) {
			u && u.d(r), r && v(t)
		}
	}
}
function yl(e) {
	let t =
			e[18]('many_results', e[17], e[5])
				.replace(/\[SEARCH_TERM\]/, e[14])
				.replace(/\[COUNT\]/, new Intl.NumberFormat(e[5].language).format(e[11].results.length)) +
			'',
		u
	return {
		c() {
			u = S(t)
		},
		m(r, s) {
			T(r, u, s)
		},
		p(r, s) {
			s[0] & 149536 &&
				t !==
					(t =
						r[18]('many_results', r[17], r[5])
							.replace(/\[SEARCH_TERM\]/, r[14])
							.replace(
								/\[COUNT\]/,
								new Intl.NumberFormat(r[5].language).format(r[11].results.length)
							) + '') &&
				y(u, t)
		},
		d(r) {
			r && v(u)
		}
	}
}
function zl(e) {
	let t =
			e[18]('one_result', e[17], e[5])
				.replace(/\[SEARCH_TERM\]/, e[14])
				.replace(/\[COUNT\]/, new Intl.NumberFormat(e[5].language).format(1)) + '',
		u
	return {
		c() {
			u = S(t)
		},
		m(r, s) {
			T(r, u, s)
		},
		p(r, s) {
			s[0] & 147488 &&
				t !==
					(t =
						r[18]('one_result', r[17], r[5])
							.replace(/\[SEARCH_TERM\]/, r[14])
							.replace(/\[COUNT\]/, new Intl.NumberFormat(r[5].language).format(1)) + '') &&
				y(u, t)
		},
		d(r) {
			r && v(u)
		}
	}
}
function jl(e) {
	let t = e[18]('zero_results', e[17], e[5]).replace(/\[SEARCH_TERM\]/, e[14]) + '',
		u
	return {
		c() {
			u = S(t)
		},
		m(r, s) {
			T(r, u, s)
		},
		p(r, s) {
			s[0] & 147488 &&
				t !== (t = r[18]('zero_results', r[17], r[5]).replace(/\[SEARCH_TERM\]/, r[14]) + '') &&
				y(u, t)
		},
		d(r) {
			r && v(u)
		}
	}
}
function Ol(e) {
	let t, u
	return (
		(t = new qs({ props: { show_images: e[1], process_result: e[3], result: e[48] } })),
		{
			c() {
				Te(t.$$.fragment)
			},
			m(r, s) {
				Ee(t, r, s), (u = !0)
			},
			p(r, s) {
				const l = {}
				s[0] & 2 && (l.show_images = r[1]),
					s[0] & 8 && (l.process_result = r[3]),
					s[0] & 34816 && (l.result = r[48]),
					t.$set(l)
			},
			i(r) {
				u || (N(t.$$.fragment, r), (u = !0))
			},
			o(r) {
				I(t.$$.fragment, r), (u = !1)
			},
			d(r) {
				he(t, r)
			}
		}
	)
}
function Ul(e) {
	let t, u
	return (
		(t = new Js({ props: { show_images: e[1], process_result: e[3], result: e[48] } })),
		{
			c() {
				Te(t.$$.fragment)
			},
			m(r, s) {
				Ee(t, r, s), (u = !0)
			},
			p(r, s) {
				const l = {}
				s[0] & 2 && (l.show_images = r[1]),
					s[0] & 8 && (l.process_result = r[3]),
					s[0] & 34816 && (l.result = r[48]),
					t.$set(l)
			},
			i(r) {
				u || (N(t.$$.fragment, r), (u = !0))
			},
			o(r) {
				I(t.$$.fragment, r), (u = !1)
			},
			d(r) {
				he(t, r)
			}
		}
	)
}
function iu(e, t) {
	let u, r, s, l, a
	const n = [Ul, Ol],
		i = []
	function h(c, f) {
		return c[2] ? 0 : 1
	}
	return (
		(r = h(t)),
		(s = i[r] = n[r](t)),
		{
			key: e,
			first: null,
			c() {
				;(u = $()), s.c(), (l = $()), (this.first = u)
			},
			m(c, f) {
				T(c, u, f), i[r].m(c, f), T(c, l, f), (a = !0)
			},
			p(c, f) {
				t = c
				let _ = r
				;(r = h(t)),
					r === _
						? i[r].p(t, f)
						: (le(),
						  I(i[_], 1, 1, () => {
								i[_] = null
						  }),
						  ae(),
						  (s = i[r]),
						  s ? s.p(t, f) : ((s = i[r] = n[r](t)), s.c()),
						  N(s, 1),
						  s.m(l.parentNode, l))
			},
			i(c) {
				a || (N(s), (a = !0))
			},
			o(c) {
				I(s), (a = !1)
			},
			d(c) {
				c && v(u), i[r].d(c), c && v(l)
			}
		}
	)
}
function ou(e) {
	let t,
		u = e[18]('load_more', e[17], e[5]) + '',
		r,
		s,
		l
	return {
		c() {
			;(t = A('button')),
				(r = S(u)),
				m(t, 'type', 'button'),
				m(t, 'class', 'pagefind-ui__button svelte-e9gkc3')
		},
		m(a, n) {
			T(a, t, n), R(t, r), s || ((l = G(t, 'click', e[20])), (s = !0))
		},
		p(a, n) {
			n[0] & 131104 && u !== (u = a[18]('load_more', a[17], a[5]) + '') && y(r, u)
		},
		d(a) {
			a && v(t), (s = !1), l()
		}
	}
}
function _u(e) {
	let t,
		u = e[18]('searching', e[17], e[5]).replace(/\[SEARCH_TERM\]/, e[14]) + '',
		r
	return {
		c() {
			;(t = A('p')), (r = S(u)), m(t, 'class', 'pagefind-ui__message svelte-e9gkc3')
		},
		m(s, l) {
			T(s, t, l), R(t, r)
		},
		p(s, l) {
			l[0] & 147488 &&
				u !== (u = s[18]('searching', s[17], s[5]).replace(/\[SEARCH_TERM\]/, s[14]) + '') &&
				y(r, u)
		},
		d(s) {
			s && v(t)
		}
	}
}
function Il(e) {
	let t,
		u,
		r,
		s,
		l,
		a,
		n = e[18]('clear_search', e[17], e[5]) + '',
		i,
		h,
		c,
		f,
		_,
		C,
		o,
		d,
		E = e[10] && au(e),
		B = e[13] && nu(e)
	return {
		c() {
			;(t = A('div')),
				(u = A('form')),
				(r = A('input')),
				(l = b()),
				(a = A('button')),
				(i = S(n)),
				(h = b()),
				(c = A('div')),
				E && E.c(),
				(f = b()),
				B && B.c(),
				m(r, 'class', 'pagefind-ui__search-input svelte-e9gkc3'),
				m(r, 'type', 'text'),
				m(r, 'placeholder', (s = e[18]('placeholder', e[17], e[5]))),
				m(r, 'autocapitalize', 'none'),
				m(r, 'enterkeyhint', 'search'),
				m(a, 'class', 'pagefind-ui__search-clear svelte-e9gkc3'),
				K(a, 'pagefind-ui__suppressed', !e[6]),
				m(c, 'class', 'pagefind-ui__drawer svelte-e9gkc3'),
				K(c, 'pagefind-ui__hidden', !e[13]),
				m(u, 'class', 'pagefind-ui__form svelte-e9gkc3'),
				m(u, 'role', 'search'),
				m(u, 'aria-label', (_ = e[18]('search_label', e[17], e[5]))),
				m(u, 'action', 'javascript:void(0);'),
				m(t, 'class', 'pagefind-ui svelte-e9gkc3'),
				K(t, 'pagefind-ui--reset', e[0])
		},
		m(p, k) {
			T(p, t, k),
				R(t, u),
				R(u, r),
				we(r, e[6]),
				e[31](r),
				R(u, l),
				R(u, a),
				R(a, i),
				e[32](a),
				R(u, h),
				R(u, c),
				E && E.m(c, null),
				R(c, f),
				B && B.m(c, null),
				(C = !0),
				o ||
					((d = [
						G(r, 'focus', e[19]),
						G(r, 'keydown', e[29]),
						G(r, 'input', e[30]),
						G(a, 'click', e[33]),
						G(u, 'submit', Pl)
					]),
					(o = !0))
		},
		p(p, k) {
			;(!C || (k[0] & 131104 && s !== (s = p[18]('placeholder', p[17], p[5])))) &&
				m(r, 'placeholder', s),
				k[0] & 64 && r.value !== p[6] && we(r, p[6]),
				(!C || k[0] & 131104) && n !== (n = p[18]('clear_search', p[17], p[5]) + '') && y(i, n),
				(!C || k[0] & 64) && K(a, 'pagefind-ui__suppressed', !p[6]),
				p[10]
					? E
						? (E.p(p, k), k[0] & 1024 && N(E, 1))
						: ((E = au(p)), E.c(), N(E, 1), E.m(c, f))
					: E &&
					  (le(),
					  I(E, 1, 1, () => {
							E = null
					  }),
					  ae()),
				p[13]
					? B
						? (B.p(p, k), k[0] & 8192 && N(B, 1))
						: ((B = nu(p)), B.c(), N(B, 1), B.m(c, null))
					: B &&
					  (le(),
					  I(B, 1, 1, () => {
							B = null
					  }),
					  ae()),
				(!C || k[0] & 8192) && K(c, 'pagefind-ui__hidden', !p[13]),
				(!C || (k[0] & 131104 && _ !== (_ = p[18]('search_label', p[17], p[5])))) &&
					m(u, 'aria-label', _),
				(!C || k[0] & 1) && K(t, 'pagefind-ui--reset', p[0])
		},
		i(p) {
			C || (N(E), N(B), (C = !0))
		},
		o(p) {
			I(E), I(B), (C = !1)
		},
		d(p) {
			p && v(t), e[31](null), e[32](null), E && E.d(), B && B.d(), (o = !1), J(d)
		}
	}
}
var Pl = (e) => e.preventDefault()
function Ll(e, t, u) {
	const r = {},
		s = Dl.map((g) => g.match(/([^\/]+)\.json$/)[1])
	for (let g = 0; g < s.length; g++) r[s[g]] = { language: s[g], ...Hl[g].strings }
	let { base_path: l = '/pagefind/' } = t,
		{ page_size: a = 5 } = t,
		{ reset_styles: n = !0 } = t,
		{ show_images: i = !0 } = t,
		{ show_sub_results: h = !1 } = t,
		{ excerpt_length: c } = t,
		{ process_result: f = null } = t,
		{ process_term: _ = null } = t,
		{ show_empty_filters: C = !0 } = t,
		{ debounce_timeout_ms: o = 300 } = t,
		{ pagefind_options: d = {} } = t,
		{ merge_index: E = [] } = t,
		{ trigger_search_term: B = '' } = t,
		{ translations: p = {} } = t,
		k = '',
		M,
		L,
		q,
		H = 40,
		z = !1,
		O = [],
		x = !1,
		ge = !1,
		ke = 0,
		Fe = '',
		Ce = a,
		be = null,
		ee = null,
		ie = {},
		Me = r.en
	const ss = (g, D, w) => w[g] ?? D[g] ?? ''
	Ts(() => {
		let g = document?.querySelector?.('html')?.getAttribute?.('lang') || 'en',
			D = du(g.toLocaleLowerCase())
		u(
			17,
			(Me =
				r[`${D.language}-${D.script}-${D.region}`] ||
				r[`${D.language}-${D.region}`] ||
				r[`${D.language}`] ||
				r.en)
		)
	}),
		ks(() => {
			M?.destroy?.(), (M = null)
		})
	const Se = async () => {
			if (!z && (u(10, (z = !0)), !M)) {
				let g
				try {
					g = await Cs(() => import(`${l}pagefind.js`), __vite__mapDeps([]))
				} catch (w) {
					console.error(w),
						console.error(
							[
								`Pagefind couldn't be loaded from ${this.options.bundlePath}pagefind.js`,
								'You can configure this by passing a bundlePath option to PagefindUI',
								`[DEBUG: Loaded from ${document?.currentScript?.src ?? 'no known script location'}]`
							].join(`
`)
						)
				}
				c || u(22, (c = h ? 12 : 30))
				let D = { ...(d || {}), excerptLength: c }
				await g.options(D)
				for (const w of E) {
					if (!w.bundlePath) throw new Error('mergeIndex requires a bundlePath parameter')
					const U = w.bundlePath
					delete w.bundlePath, await g.mergeIndex(U, w)
				}
				;(M = g), ls()
			}
		},
		ls = async () => {
			M && ((be = await M.filters()), (!ee || !Object.keys(ee).length) && u(16, (ee = be)))
		},
		as = (g) => {
			let D = {}
			return (
				Object.entries(g)
					.filter(([, w]) => w)
					.forEach(([w]) => {
						let [U, gs] = w.split(/:(.*)$/)
						;(D[U] = D[U] || []), D[U].push(gs)
					}),
				D
			)
		}
	let ue
	const ns = async (g, D) => {
			if (!g) {
				u(13, (ge = !1)), ue && clearTimeout(ue)
				return
			}
			const w = as(D),
				U = () => is(g, w)
			o > 0 && g
				? (ue && clearTimeout(ue),
				  (ue = setTimeout(U, o)),
				  await He(),
				  M.preload(g, { filters: w }))
				: U(),
				os()
		},
		He = async () => {
			for (; !M; ) Se(), await new Promise((g) => setTimeout(g, 50))
		},
		is = async (g, D) => {
			u(14, (Fe = g || '')),
				typeof _ == 'function' && (g = _(g)),
				u(12, (x = !0)),
				u(13, (ge = !0)),
				await He()
			const w = ++ke,
				U = await M.search(g, { filters: D })
			ke === w &&
				(U.filters && Object.keys(U.filters)?.length && u(16, (ee = U.filters)),
				u(11, (O = U)),
				u(12, (x = !1)),
				u(15, (Ce = a)))
		},
		os = () => {
			const g = q.offsetWidth
			g != H && u(8, (L.style.paddingRight = `${g + 2}px`), L)
		},
		_s = (g) => {
			g?.preventDefault(), u(15, (Ce += a))
		},
		cs = (g) => {
			g.key === 'Escape' && (u(6, (k = '')), L.blur()), g.key === 'Enter' && g.preventDefault()
		}
	function fs() {
		;(k = this.value), u(6, k), u(21, B)
	}
	function Es(g) {
		se[g ? 'unshift' : 'push'](() => {
			;(L = g), u(8, L)
		})
	}
	function hs(g) {
		se[g ? 'unshift' : 'push'](() => {
			;(q = g), u(9, q)
		})
	}
	const ds = () => {
		u(6, (k = '')), L.blur()
	}
	function ms(g) {
		;(ie = g), u(7, ie)
	}
	return (
		(e.$$set = (g) => {
			'base_path' in g && u(23, (l = g.base_path)),
				'page_size' in g && u(24, (a = g.page_size)),
				'reset_styles' in g && u(0, (n = g.reset_styles)),
				'show_images' in g && u(1, (i = g.show_images)),
				'show_sub_results' in g && u(2, (h = g.show_sub_results)),
				'excerpt_length' in g && u(22, (c = g.excerpt_length)),
				'process_result' in g && u(3, (f = g.process_result)),
				'process_term' in g && u(25, (_ = g.process_term)),
				'show_empty_filters' in g && u(4, (C = g.show_empty_filters)),
				'debounce_timeout_ms' in g && u(26, (o = g.debounce_timeout_ms)),
				'pagefind_options' in g && u(27, (d = g.pagefind_options)),
				'merge_index' in g && u(28, (E = g.merge_index)),
				'trigger_search_term' in g && u(21, (B = g.trigger_search_term)),
				'translations' in g && u(5, (p = g.translations))
		}),
		(e.$$.update = () => {
			e.$$.dirty[0] & 2097152 && B && (u(6, (k = B)), u(21, (B = ''))),
				e.$$.dirty[0] & 192 && ns(k, ie)
		}),
		[
			n,
			i,
			h,
			f,
			C,
			p,
			k,
			ie,
			L,
			q,
			z,
			O,
			x,
			ge,
			Fe,
			Ce,
			ee,
			Me,
			ss,
			Se,
			_s,
			B,
			c,
			l,
			a,
			_,
			o,
			d,
			E,
			cs,
			fs,
			Es,
			hs,
			ds,
			ms
		]
	)
}
var ql = class extends me {
		constructor(e) {
			super(),
				de(
					this,
					e,
					Ll,
					Il,
					fe,
					{
						base_path: 23,
						page_size: 24,
						reset_styles: 0,
						show_images: 1,
						show_sub_results: 2,
						excerpt_length: 22,
						process_result: 3,
						process_term: 25,
						show_empty_filters: 4,
						debounce_timeout_ms: 26,
						pagefind_options: 27,
						merge_index: 28,
						trigger_search_term: 21,
						translations: 5
					},
					null,
					[-1, -1]
				)
		}
	},
	xl = ql,
	ve
try {
	ve = new URL(document.currentScript.src).pathname.match(/^(.*\/)(?:pagefind-)?ui.js.*$/)[1]
} catch {
	ve = '/pagefind/'
}
var Kl = class {
	constructor(e) {
		this._pfs = null
		let t = e.element ?? '[data-pagefind-ui]',
			u = e.bundlePath ?? ve,
			r = e.pageSize ?? 5,
			s = e.resetStyles ?? !0,
			l = e.showImages ?? !0,
			a = e.showSubResults ?? !1,
			n = e.excerptLength ?? 0,
			i = e.processResult ?? null,
			h = e.processTerm ?? null,
			c = e.showEmptyFilters ?? !0,
			f = e.debounceTimeoutMs ?? 300,
			_ = e.mergeIndex ?? [],
			C = e.translations ?? []
		delete e.element,
			delete e.bundlePath,
			delete e.pageSize,
			delete e.resetStyles,
			delete e.showImages,
			delete e.showSubResults,
			delete e.excerptLength,
			delete e.processResult,
			delete e.processTerm,
			delete e.showEmptyFilters,
			delete e.debounceTimeoutMs,
			delete e.mergeIndex,
			delete e.translations
		const o = t instanceof HTMLElement ? t : document.querySelector(t)
		o
			? (this._pfs = new xl({
					target: o,
					props: {
						base_path: u,
						page_size: r,
						reset_styles: s,
						show_images: l,
						show_sub_results: a,
						excerpt_length: n,
						process_result: i,
						process_term: h,
						show_empty_filters: c,
						debounce_timeout_ms: f,
						merge_index: _,
						translations: C,
						pagefind_options: e
					}
			  }))
			: console.error(`Pagefind UI couldn't find the selector ${t}`)
	}
	triggerSearch(e) {
		this._pfs.$$set({ trigger_search_term: e })
	}
	destroy() {
		this._pfs.$destroy()
	}
}
export { Kl as PagefindUI }
function __vite__mapDeps(indexes) {
	if (!__vite__mapDeps.viteFileDeps) {
		__vite__mapDeps.viteFileDeps = []
	}
	return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
