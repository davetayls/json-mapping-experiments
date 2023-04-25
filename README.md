Benchmarks for JSON Mapping / Transforms
===

I have set this up to test some options for mapping
various external API responses to set schemas.

Setup
---

```shell
pnpm install
```

Run Benchmarks
---

```shell
pnpm test
```

Results
---

```
Running "Basic Mapping" suite...
Progress: 100%

  jslt:
    575 512 ops/s, ±0.36%   | slowest, 38.05% slower

  jsonpath-plus:
    665 340 ops/s, ±0.30%   | 28.38% slower

  jsonpath-object-transform:
    928 952 ops/s, ±0.30%   | fastest

Finished 3 cases!
  Fastest: jsonpath-object-transform
  Slowest: jslt
```
