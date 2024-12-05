import './hoisted.XRwbKKUJ.js'
const c = () => {
	function i(r, d) {
		r.forEach((n) => {
			const s = document.querySelector(`aside a[href="#${n.target.id}"]`)
			n.isIntersecting
				? (s?.classList.remove('bg-slate-200', 'dark:bg-slate-800'),
				  s?.classList.add(
						'bg-indigo-600',
						'dark:bg-indigo-700',
						'text-white',
						'font-bold',
						'transition-colors',
						'duration-200'
				  ))
				: (s?.classList.add('bg-slate-200', 'dark:bg-slate-800'),
				  s?.classList.remove(
						'bg-indigo-600',
						'dark:bg-indigo-700',
						'text-white',
						'font-bold',
						'transition-colors',
						'duration-200'
				  ))
		})
	}
	const e = document.querySelectorAll(
			'div.prose h1, div.prose h2, div.prose h3, div.prose h4, div.prose h5, div.prose h6'
		),
		t = { root: null, rootMargin: ' 15% 0px 0% 0px ', threshold: 1 },
		o = new IntersectionObserver(i, t)
	e.forEach((r) => {
		o.observe(r)
	})
}
c()
document.addEventListener('astro:after-swap', c)
const a = () => {
	document.querySelectorAll('pre').forEach((e) => {
		const t = e.querySelector('.copy-button'),
			o = e.querySelector('.check-span')
		t.addEventListener('click', () => {
			navigator.clipboard.writeText(e.textContent?.trim() || ''),
				o?.classList.remove('opacity-0'),
				t?.classList.add('opacity-0'),
				setTimeout(() => {
					o?.classList.add('opacity-0'), t?.classList.remove('opacity-0')
				}, 2e3)
		})
	})
}
a()
document.addEventListener('astro:after-swap', a)
