import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import fs from 'fs';


export default {
  entry: 'index.js',
  format: 'life',
  sourcemap: 'inline'
  plugins: [
    vue({
      compileTemplate: true
    }),
    buble()
  ]
})
.then(function (bundle) {
  bundle.generate({
    format: 'umd',
    moduleName: 'helloRollupVue',
    useStrict: false
  })
})
.then(function (code) {
  var minified = uglify.minify(code, {
    fromString: true,
    output: {
      ascii_only: true
    }
  })
})

}

export default {
  entry: 'src/scripts/main.js',
  dest: 'build/js/main.min.js',
  format: 'iife',
  sourceMap: 'inline',
  plugins: [
    vue({
      compileTemplate: true
    }),
    buble(
      exclude: 'node_modules/**',
    ),
    eslint({
      exclude: [
        'src/styles/**',
      ]
    })
    replace({
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    (process.env.NODE_ENV === 'production' && uglify()),
  ],
};
