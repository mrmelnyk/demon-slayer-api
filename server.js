const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(cors());

const characters = {
    'tanjiro': {
        'fullName': 'Tanjiro Kamado',
        'race': 'Human',
        'breathingTechnique': 'Water/Hirokami Kagara'
    },

    'zenistu': {
        'fullName': 'Zenitsu Agatsuma',
        'race': 'Human',
        'breathingTechnique': 'Thunder'
    },

    'inosuke': {
        'fullName': 'Inosuke Hashibira',
        'race': 'Human',
        'breathingTechnique': 'Beast'
    },

    'unknown': {
        'fullName': 'Unknown',
        'race': 'Unknown',
        'breathingTechnique': 'Unknown'
    }
    
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const characterName = request.params.name.toLowerCase();
    if(characters[characterName]){
        res.json(characters[characterName]);
    }else {
        res.json(characters['unknown']);
    };
})

app.listen(process.env.PORT || PORT, (req, res) => {
    console.log(`The server is now running on port ${PORT}.`);
})