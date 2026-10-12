import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import { load } from 'cheerio'

// Run npm run build first: exercise the actual generated page, not source text.
const $ = load(await readFile('.next/server/app/projects.html', 'utf8'))

test('the rendered projects page includes BrandMan and retains existing projects', () => {
  const projects = $('main ul[role="list"] > li')
  assert.equal(projects.length, 4)
  const links = projects
    .find('h2 a')
    .map((_, link) => ({
      name: $(link).text(),
      href: $(link).attr('href'),
    }))
    .get()
  assert.deepEqual(links, [
    { name: 'BrandMan', href: 'https://usebrandman.com' },
    { name: 'Backcountry Hunter', href: 'https://backcountryhunter.app' },
    { name: 'Points Mafia', href: 'https://pointsmafia.com' },
    { name: 'Smart Locker USA', href: 'https://smartlockerusa.com' },
  ])
  assert.match(projects.first().text(), /explicit approval before publishing/)
  assert.match(projects.last().text(), /Built, grew, and sold/)
})
