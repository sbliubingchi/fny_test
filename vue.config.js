module.exports = {
    devServer: {
        proxy: {
            '/api': {
                // 需要代理的url
                target: 'http://127.0.0.1:9001',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    }
}