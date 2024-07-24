

const heading = React.createElement('div', { id: 'parent' },
    [React.createElement('div', { id: 'child' },
        [React.createElement('h1', { key: 1 }, 'I am the h1 tag'), React.createElement('h2', { key: 2 }, 'I am the h2 tag')]), React.createElement('div', { id: 'child2' },
            [React.createElement('h1', { key: 1 }, 'I am the h1 tag'), React.createElement('h2', { key: 2 }, 'I am the h2 tag')])]);

// console.log('heading:', heading);// return object
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('root:', root);
root.render(heading);

