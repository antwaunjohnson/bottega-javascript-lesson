const blog = {
    title: 'My great post'
    
};

const openGraphMetadta = ({title, summary = "A DailySmarty Post"}) => {
    console.log(`
    og-title=${title}
    og-description=${summary}
    `);
};

openGraphMetadta(blog);

