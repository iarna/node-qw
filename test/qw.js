'use strict'
const test = require('tap').test
const qw = require('../qw.js')
test('qw', function (t) {
  t.isDeeply(qw`foo`, ['foo'], 'single')
  t.isDeeply(qw`foo   `, ['foo'], 'single trailing whitespace')
  t.isDeeply(qw`   foo`, ['foo'], 'single leading whitespace')
  t.isDeeply(qw` foo `, ['foo'], 'single both whitespace')

  t.isDeeply(qw`foo bar`, ['foo', 'bar'], 'double')
  t.isDeeply(qw`foo   bar`, ['foo', 'bar'], 'double middle whitespace')
  t.isDeeply(qw`foo bar   `, ['foo', 'bar'], 'double trailing whitespace')
  t.isDeeply(qw`   foo bar`, ['foo', 'bar'], 'double leading whitespace')
  t.isDeeply(qw` foo bar `, ['foo', 'bar'], 'double both whitespace')
  t.isDeeply(qw` foo   bar `, ['foo', 'bar'], 'double all whitespace')

  t.isDeeply(qw`foo bar baz`, ['foo', 'bar', 'baz'], 'triple')
  t.isDeeply(qw`foo   bar   baz`, ['foo', 'bar', 'baz'], 'triple middle whitespace')
  t.isDeeply(qw`foo bar baz   `, ['foo', 'bar', 'baz'], 'triple trailing whitespace')
  t.isDeeply(qw`   foo bar baz`, ['foo', 'bar', 'baz'], 'triple leading whitespace')
  t.isDeeply(qw` foo bar baz `, ['foo', 'bar', 'baz'], 'triple both whitespace')
  t.isDeeply(qw` foo   bar   baz `, ['foo', 'bar', 'baz'], 'triple all whitespace')

  const foo = 'exam ple'
  t.isDeeply(qw`${foo} bar baz`, ['exam ple', 'bar', 'baz'], 'one var')
  t.isDeeply(qw`${foo}   bar   baz`, ['exam ple', 'bar', 'baz'], 'one var middle whitespace')
  t.isDeeply(qw`${foo} bar baz   `, ['exam ple', 'bar', 'baz'], 'one var trailing whitespace')
  t.isDeeply(qw`   ${foo} bar baz`, ['exam ple', 'bar', 'baz'], 'one var leading whitespace')
  t.isDeeply(qw` ${foo} bar baz `, ['exam ple', 'bar', 'baz'], 'one var both whitespace')
  t.isDeeply(qw` ${foo}   bar   baz `, ['exam ple', 'bar', 'baz'], 'one var all whitespace')

  const bar = 'zzzz'
  t.isDeeply(qw`${foo} ${bar} baz`, ['exam ple', 'zzzz', 'baz'], 'two var')
  t.isDeeply(qw`${foo}   ${bar}   baz`, ['exam ple', 'zzzz', 'baz'], 'two var middle whitespace')
  t.isDeeply(qw`${foo} ${bar} baz   `, ['exam ple', 'zzzz', 'baz'], 'two var trailing whitespace')
  t.isDeeply(qw`   ${foo} ${bar} baz`, ['exam ple', 'zzzz', 'baz'], 'two var leading whitespace')
  t.isDeeply(qw` ${foo} ${bar} baz `, ['exam ple', 'zzzz', 'baz'], 'two var both whitespace')
  t.isDeeply(qw` ${foo}   ${bar}   baz `, ['exam ple', 'zzzz', 'baz'], 'two var all whitespace')

  const baz = ['THINGY']
  t.isDeeply(qw`${foo} ${bar} ${baz}`, ['exam ple', 'zzzz', ['THINGY']], 'three var')
  t.isDeeply(qw`${foo}   ${bar}   ${baz}`, ['exam ple', 'zzzz', ['THINGY']], 'three var middle whitespace')
  t.isDeeply(qw`${foo} ${bar} ${baz}   `, ['exam ple', 'zzzz', ['THINGY']], 'three var trailing whitespace')
  t.isDeeply(qw`   ${foo} ${bar} ${baz}`, ['exam ple', 'zzzz', ['THINGY']], 'three var leading whitespace')
  t.isDeeply(qw` ${foo} ${bar} ${baz} `, ['exam ple', 'zzzz', ['THINGY']], 'three var both whitespace')
  t.isDeeply(qw` ${foo}   ${bar}   ${baz} `, ['exam ple', 'zzzz', ['THINGY']], 'three var all whitespace')

  t.isDeeply(qw`abc${foo}`, ['abcexam ple'], 'append vars')
  t.isDeeply(qw`${foo}abc`, ['exam pleabc'], 'prepend vars')
  t.isDeeply(qw`${foo}${bar}`, ['exam plezzzz'], 'chain vars')

  t.done()
})
