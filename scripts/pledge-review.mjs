// bala-archives — public engagement pledge review
// Reviews the 5-point pledge each session; logs changes to reports/LOG.md.
// Run: node scripts/pledge-review.mjs

const PLEDGE = [
  'Build in public — repos public, roadmaps public, build logs dated and public',
  'Tell the truth — no fabricated certifications, customers, funding, or models',
  'Respond — issues ≤7 days, PRs ≤14 days, email ≤7 days',
  'Collaborate — good-first-issues and PR templates in bala-weave',
  'Connect everything — bala-nexus keeps one map of the whole world',
];

console.log('Public engagement pledge (review each session):');
PLEDGE.forEach((p, i) => console.log(`${i + 1}. ${p}`));

// Check: is the pledge still honest? If any point can't be kept, log it.
const now = new Date().toISOString();
console.log(`\nReviewed at ${now}. No changes unless a point is no longer keepable.`);
