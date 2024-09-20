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
        'age': '16',
        'height': '165cm (5.5)',
        'weight': '61kg (134lb)',
        'birthday': 'July 14',
        'hairColor': 'Black to Red',
        'eyeColor': 'Dark Red',
        'combatStyle': 'Water Breathing/Sun Breathing (Hirokami Kagara)',
        'affiliation': 'Demon Slayer Corps'
    },

    'zenistu': {
        'fullName': 'Zenitsu Agatsuma',
        'race': 'Human',
        'gender': 'Male',
        'age': '16',
        'height': '164cm (5.4)',
        'weight': '58kg (128lbs)',
        'birthday': 'September 3',
        'hairColor': 'Blonde to Orange',
        'eyeColor': 'Brown',
        'combatStyle': 'Thunder Breathing',
        'affiliation': 'Demon Slayer Corps'
    },

    'inosuke': {
        'fullName': 'Inosuke Hashibira',
        'race': 'Human',
        'gender': 'Male',
        'age': '15',
        'height': '164cm (5.4)',
        'weight': '63kg (139lbs)',
        'birthday': 'April 22',
        'hairColor': 'Black to Blue',
        'eyeColor': 'Green',
        'combatStyle': 'Beast Breathing',
        'affiliation': 'Demon Slayer Corps'
    },

    'nezuko': {
        'fullName': 'Nezuko Kamado',
        'race': 'Human/Demon',
        'gender': 'Female',
        'age': '14',
        'height': '153cm (5.0)',
        'weight': '45kg (99lbs)',
        'birthday': 'December 28',
        'hairColor': 'Black to Orange',
        'eyeColor': 'Pink',
        'combatStyle': 'Blood Demon Art: Combustible Blood',
        'affiliation': 'Demon Slayer Corps'
    },

    'giyu': {
        'fullName': 'Giyu Tomoika',
        'race': 'Human',
        'gender': 'Male',
        'age': '21',
        'height': '176cm (5.9)',
        'weight': '69kg (152lbs)',
        'birthday': 'February 8',
        'hairColor': 'Black',
        'eyeColor': 'Blue',
        'combatStyle': 'Water Breathing',
        'affiliation': 'Demon Slayer Corps'
    },

    'unknown': {
        'fullName': '',
        'race': '',
        'gender': '',
        'age': '',
        'height': '',
        'weight': '',
        'birthday': '',
        'hairColor': '',
        'eyeColor': '',
        'combatStyle': '',
        'affiliation': ''
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