const fetch = require('node-fetch');

// https://api.dailysmarty.com/posts
//https://api.github.com/users/antwaunjohnson/repos

async function queryApis(){
    try {
        const postsPromise = fetch('https://api.dailysmarty.com/post');
        const posts = await postsPromise.then(res => res.json());
        console.log(posts);
    } catch(err){
       console.log(err);
       console.log('There was an error with the DailySmarty API');
    }  
    try {
        const reposPromise = fetch('https://api.github.com/users/antwaunjohnson/repos');
        const repos = await reposPromise.then(res => res.json());
        console.log(repos);
    } catch(err){
        console.log(err);
        console.log('There was an error with the Github API');
    }
}

queryApis();