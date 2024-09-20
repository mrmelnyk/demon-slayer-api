const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(cors());

const characters = {
    'tanjiro': {
        'fullName': 'Tanjiro Kamado',
        'race': 'Human',
        'gender': 'Male',
        'age': '13 to 16',
        'height': '165cm (5.5)',
        'weight': '61kg (134lb)',
        'breathingTechnique': 'Water/Sun (Hirokami Kagara)'
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

    'nezuko': {
        'fullName': 'Nezuko Kamado',
        'race': 'Demon',
        'breathingTechnique': 'N/A',
        'bloodDemonArt': 'Burning Blood'
    },

    'giyu': {
        'fullName': 'Giyu Tomioka',
        'race': 'Human',
        'breathingTechnique': 'Water'
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