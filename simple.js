// {type: '', props: {}, children: []}

var html = {
    type: 'ul',
    props: {},
    children: [
        { type: 'li', props: {}, children: ['Thing 1'] },
        { type: 'li', props: {}, children: ['Thing 2'] }
    ]
}

Domket.render(html, 'app');