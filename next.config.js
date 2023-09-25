/** @type {import('next').NextConfig} */
const nextConfig = {
    // webpack: (config, { webpack }) => {
    //     const draftJsPluginLoader = {
    //         test: /plugin\.css$/,
    //         loaders: ['style-loader', 'css'],
    //     };
    //     console.log(webpack.module.loaders);
    //     // console.log(Object.keys(config.module));
    //     // if (config.module.loaders?.length > 0) {
    //     //     config.module.loaders.push(draftJsPluginLoader);
    //     // } else {
    //     //     config.module.loaders = [draftJsPluginLoader];
    //     // }

    //     return config;
    // }
    // webpack: config => {
    //     config.module.rules.push(
    //       {
    //         test: /\.css$/i,
    //         use: ['style-loader', 'css-loader'],
    //       }
    //     );
    //     return config;
    //   }
}

module.exports = nextConfig
