/**
 * vue.config.js
 * @date 2018-08-08
 * @author DIEW
 */
module.exports = {
    baseUrl: '/',//Type: string
    outputDir: "dist",//Type: string Default: 'dist'当运行 vue-cli-service build 时生成的生产环境构建文件的目录。注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
    assetsDir: "assets",//Type: string; Default: ''; 放置生成的静态资源 (js、css、img、fonts) 的目录。
    lintOnSave: true,//Type: boolean Default: true 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
    productionSourceMap: true,//Type: boolean Type: boolean 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    configureWebpack: () => { },//Type: Object | Function,
    css: {
        modules: false,//Type: boolean Default: false  只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块
        extract: true,//Type: boolean Default: true (in production mode)
        sourceMap: false,//Default: false
        loaderOptions: {
            // 给 sass-loader 传递选项
            sass: {
                // @/ 是 src/ 的别名
                // 所以这里假设你有 `src/variables.scss` 这个文件
                // data: `@import "@/styles/common.module.scss";`
            },
            postcss: {
                // 这里的选项会传递给 postcss-loader
            },
            css: {
                // 这里的选项会传递给 css-loader
            },
        },//Type: Object Default: {}
    },
    devServer: {
        // proxy:"http://192.168.0.104:3000/",//Type: string | Object
        proxy: {
            '/api': {
                target: 'http://192.168.0.104:3000/', // 接口域名
                changeOrigin: true, //是否跨域
                ws: true,
                pathRewrite: {
                    '^/api/getJson1': '/getJson',//匹配请求url中的’/api/getJson1‘,将其匹配为‘/getJson’
                }
            }
        }
    },//Type: Object

}