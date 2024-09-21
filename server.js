const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(cors());

const characters = {
    'demon slayer corp': {
        'corp members': {
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

            'kanao': {
                'fullName': 'Kanao Tsuyuri',
                'race': 'Human',
                'gender': 'Female',
                'age': '16',
                'height': '156cm (5.1)',
                'weight': '46kg (101lbs)',
                'birthday': 'May 19',
                'hairColor': 'Black',
                'eyeColor': 'Purple',
                'combatStyle': 'Flower Breathing',
                'affiliation': 'Demon Slayer Corps'
            },

            'genya': {
                'fullName': 'Genya Shinazugawa',
                'race': 'Human',
                'gender': 'Male',
                'age': '16',
                'height': '180cm (5.11)',
                'weight': '76kg (168lbs)',
                'birthday': 'January 7',
                'hairColor': 'Black',
                'eyeColor': 'Dark Purple',
                'combatStyle': 'Dual Weilding: Pistol & Katana',
                'affiliation': 'Demon Slayer Corps'
            }
        },

        'hashira': {
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
                'affiliation': 'Demon Slayer Corps Hashira'
            },

            'shinobu': {
                'fullName': 'Shinobu Kocho',
                'race': 'Human',
                'gender': 'Female',
                'age': '18',
                'height': '151cm (4.11)',
                'weight': '37kg (82lbs)',
                'birthday': 'February 24',
                'hairColor': 'Black to Purple',
                'eyeColor': 'Purple',
                'combatStyle': 'Insect Breathing',
                'affiliation': 'Demon Slayer Corps Hashira'
            },

            'rengoku': {
                'fullName': 'Kyojuro Rengoku',
                'race': 'Human',
                'gender': 'Male',
                'age': '20',
                'height': '177cm (5.9)',
                'weight': '72kg (159lbs)',
                'birthday': 'May 10',
                'hairColor': 'Gold with Red Tips',
                'eyeColor': 'Gold with Red Irises',
                'combatStyle': 'Flame Breathing',
                'affiliation': 'Demon Slayer Corps Hashira'
            },

            'tengen': {
                'fullName': 'Tengen Uzui',
                'race': 'Human',
                'gender': 'Male',
                'age': '23',
                'height': '198cm (6.6)',
                'weight': '95kg (209lbs)',
                'birthday': 'October 31',
                'hairColor': 'White',
                'eyeColor': 'Fuchsia',
                'combatStyle': 'Sound Breathing',
                'affiliation': 'Demon Slayer Corps Hashira'
            },

            'muichiro': {
                'fullName': 'Muichiro Tokito',
                'race': 'Human',
                'gender': 'Male',
                'age': '14',
                'height': '160cm (5.3)',
                'weight': '56kg (123lbs)',
                'birthday': 'August 8',
                'hairColor': 'Black to Cyan',
                'eyeColor': 'Cyan',
                'combatStyle': 'Mist Breathing',
                'affiliation': 'Demon Slayer Corps Hashira'
            },

            'kanroji': {
                'fullName': 'Kanroji Mitsuri',
                'race': 'Human',
                'gender': 'Female',
                'age': '19',
                'height': '167cm (5.6)',
                'weight': '56kg (123lbs)',
                'birthday': 'June 1',
                'hairColor': 'Pink to Green',
                'eyeColor': 'Green',
                'combatStyle': 'Love Breathing',
                'affiliation': 'Demon Slayer Corps Hashira'
            },

            'obanai': {
                'fullName': 'Obanai Iguro',
                'race': 'Human',
                'gender': 'Male',
                'age': '21',
                'height': '162cm (5.3)',
                'weight': '53kg (117lbs)',
                'birthday': 'September 15',
                'hairColor': 'Black',
                'eyeColor': 'Teal(Left) Yellow(Right)',
                'combatStyle': 'Serpent Breathing',
                'affiliation': 'Demon Slayer Corps Hashira'
            },

            'shinazugawa': {
                'fullName': 'Sanemi Shinazugawa',
                'race': 'Human',
                'gender': 'Male',
                'age': '21',
                'height': '179cm (5.10)',
                'weight': '75kg (165lbs)',
                'birthday': 'November 29',
                'hairColor': 'White',
                'eyeColor': 'Light Purple',
                'combatStyle': 'Wind Breathing',
                'affiliation': 'Demon Slayer Corps Hashira'
            },

            'himejima': {
                'fullName': 'Gyomei Himejima',
                'race': 'Human',
                'gender': 'Male',
                'age': '27',
                'height': '220cm (7.2)',
                'weight': '130kg (287lbs)',
                'birthday': 'August 23',
                'hairColor': 'Black',
                'eyeColor': 'White',
                'combatStyle': 'Stone Breathing',
                'affiliation': 'Demon Slayer Corps Hashira'
            }
        }, 

        'kakushi': {
            'goto': {
                'fullName': 'Goto',
                'race': 'Human',
                'gender': 'Male',
                'age': '23',
                'height': '',
                'weight': '',
                'birthday': '',
                'hairColor': 'Black',
                'eyeColor': 'Brown',
                'combatStyle': '',
                'affiliation': 'Kakushi Cleanup Brigade'
            },

            'masao': {
                'fullName': 'Masao Maeda',
                'race': 'Human',
                'gender': 'Male',
                'age': '',
                'height': '',
                'weight': '',
                'birthday': '',
                'hairColor': 'Black',
                'eyeColor': 'Black',
                'combatStyle': '',
                'affiliation': 'Kakushi Uniform Maker'
            }
        }
    },

    'demons': {
        'unranked': {
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

            'muzan': {
                'fullName': 'Muzan Kibutsuji',
                'race': 'Demon',
                'gender': 'Male',
                'age': '1000+',
                'height': '179cm (5.10)',
                'weight': '75kg (165lbs)',
                'birthday': '',
                'hairColor': 'Black',
                'eyeColor': 'Red',
                'combatStyle': 'Biokinesis',
                'affiliation': 'Leader of the Twelve Kizuki'
            },

            'tamayo': {
                'fullName': 'Lady Tamayo',
                'race': 'Demon',
                'gender': 'Female',
                'age': '500+',
                'height': '150cm (4.11)',
                'weight': '40kg (88lbs)',
                'birthday': '',
                'hairColor': 'Dark Brown',
                'eyeColor': 'Purple to Lavender',
                'combatStyle': 'Blood Demon Art: Blood Bewitchment',
                'affiliation': 'Demon Slayer Corps'
            },

            'yushiro': {
                'fullName': 'Yushiro Yamamoto',
                'race': 'Demon',
                'gender': 'Male',
                'age': '35',
                'height': '157cm (5.2)',
                'weight': '51kg (112lbs)',
                'birthday': '',
                'hairColor': 'Mint Green to Black',
                'eyeColor': 'Lavender',
                'combatStyle': 'Blood Demon Art: Blindfold',
                'affiliation': 'Demon Slayer Corps'
            },

            'susamaru': {
                'fullName': 'Susamaru',
                'race': 'Demon',
                'gender': 'Female',
                'age': '',
                'height': '',
                'weight': '',
                'birthday': '',
                'hairColor': 'Black to Orange',
                'eyeColor': 'Yellow',
                'combatStyle': 'Hiasobi Temari',
                'affiliation': 'Muzan Kibutsuji'
            },

            'yahaba': {
                'fullName': 'Yahaba',
                'race': 'Demon',
                'gender': 'Male',
                'age': '',
                'height': '',
                'weight': '',
                'birthday': '',
                'hairColor': 'Black',
                'eyeColor': 'Red',
                'combatStyle': 'Koketsu Arrow',
                'affiliation': 'Muzan Kibutsuji'
            },

            'hand demon': {
                'fullName': 'Hand Demon',
                'race': 'Demon',
                'gender': 'Male',
                'age': '47',
                'height': '',
                'weight': '',
                'birthday': '',
                'hairColor': 'Black',
                'eyeColor': 'Yellow',
                'combatStyle': 'Hand Manipulation',
                'affiliation': 'None'
            },

            'swamp demon': {
                'fullName': 'Swamp Demon',
                'race': 'Demon',
                'gender': 'Male',
                'age': '',
                'height': '',
                'weight': '',
                'birthday': '',
                'hairColor': 'Dark Blue and Violet',
                'eyeColor': 'Red',
                'combatStyle': 'Swamp Domain',
                'affiliation': 'None'
            },

        },

        'spider family': {
            'father': {
                'fullName': 'Father Spider Demon',
                'race': 'Demon',
                'gender': 'Male',
                'age': '',
                'height': '',
                'weight': '',
                'birthday': '',
                'hairColor': 'Silver',
                'eyeColor': 'Teal',
                'combatStyle': '',
                'affiliation': 'Spider Family'
            },

            'mother': {
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
            },
        },

        'kizuki': {
            'lowerrank': {

            },

            'upperrank': {

            }
        }
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