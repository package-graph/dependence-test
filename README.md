# dependence-test
package-graph-tools-test

### 依赖图构建
脚本main.js

* 测试根目录依赖：
```json
"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.14.2"
  }
```
* 测试输出依赖节点：
```js
[
  { name: 'react-ssr', version: '1.0.0' },
  { name: 'react', version: '18.2.0' },
  { name: 'loose-envify', version: '1.4.0' },
  { name: 'js-tokens', version: '4.0.0' },
  { name: 'react-dom', version: '18.2.0' },
  { name: 'scheduler', version: '0.23.0' },
  { name: 'react-router-dom', version: '6.14.2' },
  { name: '@remix-run/router', version: '1.7.2' },
  { name: 'react-router', version: '6.14.2' }
]

```
* 测试输出依赖关系：
```js
[
  {
    source: { name: 'react-ssr', version: '1.0.0' },
    target: { name: 'react', version: '^18.2.0' }
  },
  {
    source: { name: 'react', version: '18.2.0' },
    target: { name: 'loose-envify', version: '^1.1.0' }
  },
  {
    source: { name: 'loose-envify', version: '1.4.0' },
    target: { name: 'js-tokens', version: '^3.0.0 || ^4.0.0' }
  },
  {
    source: { name: 'react-ssr', version: '1.0.0' },
    target: { name: 'react-dom', version: '^18.2.0' }
  },
  {
    source: { name: 'react-dom', version: '18.2.0' },
    target: { name: 'loose-envify', version: '^1.1.0' }
  },
  {
    source: { name: 'react-dom', version: '18.2.0' },
    target: { name: 'scheduler', version: '^0.23.0' }
  },
  {
    source: { name: 'scheduler', version: '0.23.0' },
    target: { name: 'loose-envify', version: '^1.1.0' }
  },
  {
    source: { name: 'react-ssr', version: '1.0.0' },
    target: { name: 'react-router-dom', version: '^6.14.2' }
  },
  {
    source: { name: 'react-router-dom', version: '6.14.2' },
    target: { name: '@remix-run/router', version: '1.7.2' }
  },
  {
    source: { name: 'react-router-dom', version: '6.14.2' },
    target: { name: 'react-router', version: '6.14.2' }
  },
  {
    source: { name: 'react-router', version: '6.14.2' },
    target: { name: '@remix-run/router', version: '1.7.2' }
  }
]

```

