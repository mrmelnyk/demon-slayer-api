const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(cors());

const characters = {
    'characters': {

            'tanjiro final selection': {
                'fullName': 'Tanjiro Kamado',
                'race': 'Human',
                'gender': 'Male',
                'age': '16',
                'height': '165cm (5.5)',
                'weight': '61kg (134lb)',
                'birthday': 'July 14',
                'hairColor': 'Black to Red',
                'eyeColor': 'Dark Red',
                'combatStyle': 'Water Breathing',
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Unwavering Resolve: Final Selection',
                'power': 60
            },

            'tanjiro first mission': {
                'fullName': 'Tanjiro Kamado',
                'race': 'Human',
                'gender': 'Male',
                'age': '16',
                'height': '165cm (5.5)',
                'weight': '61kg (134lb)',
                'birthday': 'July 14',
                'hairColor': 'Black to Red',
                'eyeColor': 'Dark Red',
                'combatStyle': 'Water Breathing',
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Unwavering Resolve: First Mission',
                'power': 70
            },

            'tanjiro asakusa': {
                'fullName': 'Tanjiro Kamado',
                'race': 'Human',
                'gender': 'Male',
                'age': '16',
                'height': '165cm (5.5)',
                'weight': '61kg (134lb)',
                'birthday': 'July 14',
                'hairColor': 'Black to Red',
                'eyeColor': 'Dark Red',
                'combatStyle': 'Water Breathing',
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Unwavering Resolve: Asakusa, Tokyo',
                'power': 80
            },

            'tanjiro tsuzumi mansion': {
                'fullName': 'Tanjiro Kamado',
                'race': 'Human',
                'gender': 'Male',
                'age': '16',
                'height': '165cm (5.5)',
                'weight': '61kg (134lb)',
                'birthday': 'July 14',
                'hairColor': 'Black to Red',
                'eyeColor': 'Dark Red',
                'combatStyle': 'Water Breathing',
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Unwavering Resolve: Tsuzumi Mansion',
                'power': 100
            },

            'tanjiro mt natagumo': {
                'fullName': 'Tanjiro Kamado',
                'race': 'Human',
                'gender': 'Male',
                'age': '16',
                'height': '165cm (5.5)',
                'weight': '61kg (134lb)',
                'birthday': 'July 14',
                'hairColor': 'Black to Red',
                'eyeColor': 'Dark Red',
                'combatStyle': 'Water Breathing',
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Unwavering Resolve: Mt. Natagumo',
                'power': 120
            },

            'tanjiro mt natagumo': {
                'fullName': 'Tanjiro Kamado',
                'race': 'Human',
                'gender': 'Male',
                'age': '16',
                'height': '165cm (5.5)',
                'weight': '61kg (134lb)',
                'birthday': 'July 14',
                'hairColor': 'Black to Red',
                'eyeColor': 'Dark Red',
                'combatStyle': 'Water Breathing',
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Unwavering Resolve: Mt. Natagumo Hinokami Kagura',
                'power': 200
            },

            'tanjiro butterfly mansion': {
                'fullName': 'Tanjiro Kamado',
                'race': 'Human',
                'gender': 'Male',
                'age': '16',
                'height': '165cm (5.5)',
                'weight': '61kg (134lb)',
                'birthday': 'July 14',
                'hairColor': 'Black to Red',
                'eyeColor': 'Dark Red',
                'combatStyle': 'Water Breathing',
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Unwavering Resolve: Total Concentration Breathing',
                'power': 180
            },

            'tanjiro mugen train': {
                'fullName': 'Tanjiro Kamado',
                'race': 'Human',
                'gender': 'Male',
                'age': '16',
                'height': '165cm (5.5)',
                'weight': '61kg (134lb)',
                'birthday': 'July 14',
                'hairColor': 'Black to Red',
                'eyeColor': 'Dark Red',
                'combatStyle': 'Water Breathing',
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Mugen Train Arc: Water Breathing',
                'power': 200
            },

            'tanjiro mugen train hinokami kagura': {
                'fullName': 'Tanjiro Kamado',
                'race': 'Human',
                'gender': 'Male',
                'age': '16',
                'height': '165cm (5.5)',
                'weight': '61kg (134lb)',
                'birthday': 'July 14',
                'hairColor': 'Black to Red',
                'eyeColor': 'Dark Red',
                'combatStyle': 'Water Breathing',
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Mugen Train Arc: Hinokami Kagura',
                'power': 350
            },

            'tanjiro entertainment district': {
                'fullName': 'Tanjiro Kamado',
                'race': 'Human',
                'gender': 'Male',
                'age': '16',
                'height': '165cm (5.5)',
                'weight': '61kg (134lb)',
                'birthday': 'July 14',
                'hairColor': 'Black to Red',
                'eyeColor': 'Dark Red',
                'combatStyle': 'Water Breathing',
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Entertainment District Arc: Water & Sun Breathing',
                'power': 400
            },

            'tanjiro entertainment district marked': {
                'fullName': 'Tanjiro Kamado',
                'race': 'Human',
                'gender': 'Male',
                'age': '16',
                'height': '165cm (5.5)',
                'weight': '61kg (134lb)',
                'birthday': 'July 14',
                'hairColor': 'Black to Red',
                'eyeColor': 'Dark Red',
                'combatStyle': 'Water Breathing',
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Entertainment District Arc: Sun Breathing Marked',
                'power': 600
            },

            'tanjiro sword smith village': {
                'fullName': 'Tanjiro Kamado',
                'race': 'Human',
                'gender': 'Male',
                'age': '16',
                'height': '165cm (5.5)',
                'weight': '61kg (134lb)',
                'birthday': 'July 14',
                'hairColor': 'Black to Red',
                'eyeColor': 'Dark Red',
                'combatStyle': 'Water Breathing',
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Sword Smith Village: Training',
                'power': 550
            },

            'tanjiro sword smith village hinokami kagura': {
                'fullName': 'Tanjiro Kamado',
                'race': 'Human',
                'gender': 'Male',
                'age': '16',
                'height': '165cm (5.5)',
                'weight': '61kg (134lb)',
                'birthday': 'July 14',
                'hairColor': 'Black to Red',
                'eyeColor': 'Dark Red',
                'combatStyle': 'Water Breathing',
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Sword Smith Village: Hinokami Kagura',
                'power': 750
            },

            'tanjiro sword smith village marked': {
                'fullName': 'Tanjiro Kamado',
                'race': 'Human',
                'gender': 'Male',
                'age': '16',
                'height': '165cm (5.5)',
                'weight': '61kg (134lb)',
                'birthday': 'July 14',
                'hairColor': 'Black to Red',
                'eyeColor': 'Dark Red',
                'combatStyle': 'Water Breathing',
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Sword Smith Village: Marked',
                'power': 850
            },

            'tanjiro hashira training tengen': {
                'fullName': 'Tanjiro Kamado',
                'race': 'Human',
                'gender': 'Male',
                'age': '16',
                'height': '165cm (5.5)',
                'weight': '61kg (134lb)',
                'birthday': 'July 14',
                'hairColor': 'Black to Red',
                'eyeColor': 'Dark Red',
                'combatStyle': 'Water Breathing',
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Hashira Training: Tengen',
                'power': 800
            },

            'tanjiro hashira training kanroji': {
                'fullName': 'Tanjiro Kamado',
                'race': 'Human',
                'gender': 'Male',
                'age': '16',
                'height': '165cm (5.5)',
                'weight': '61kg (134lb)',
                'birthday': 'July 14',
                'hairColor': 'Black to Red',
                'eyeColor': 'Dark Red',
                'combatStyle': 'Water Breathing',
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Hashira Training: Kanroji',
                'power': 825
            },

            'tanjiro hashira training muichiro': {
                'fullName': 'Tanjiro Kamado',
                'race': 'Human',
                'gender': 'Male',
                'age': '16',
                'height': '165cm (5.5)',
                'weight': '61kg (134lb)',
                'birthday': 'July 14',
                'hairColor': 'Black to Red',
                'eyeColor': 'Dark Red',
                'combatStyle': 'Water Breathing',
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Hashira Training: Muichiro',
                'power': 850
            },

            'tanjiro hashira training obanai': {
                'fullName': 'Tanjiro Kamado',
                'race': 'Human',
                'gender': 'Male',
                'age': '16',
                'height': '165cm (5.5)',
                'weight': '61kg (134lb)',
                'birthday': 'July 14',
                'hairColor': 'Black to Red',
                'eyeColor': 'Dark Red',
                'combatStyle': 'Water Breathing',
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Hashira Training: Obanai',
                'power': 875
            },

            'tanjiro hashira training shinazugawa': {
                'fullName': 'Tanjiro Kamado',
                'race': 'Human',
                'gender': 'Male',
                'age': '16',
                'height': '165cm (5.5)',
                'weight': '61kg (134lb)',
                'birthday': 'July 14',
                'hairColor': 'Black to Red',
                'eyeColor': 'Dark Red',
                'combatStyle': 'Water Breathing',
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Hashira Training: Shinazugawa',
                'power': 875
            },

            'tanjiro hashira training himejima': {
                'fullName': 'Tanjiro Kamado',
                'race': 'Human',
                'gender': 'Male',
                'age': '16',
                'height': '165cm (5.5)',
                'weight': '61kg (134lb)',
                'birthday': 'July 14',
                'hairColor': 'Black to Red',
                'eyeColor': 'Dark Red',
                'combatStyle': 'Water Breathing',
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Hashira Training: Himejima',
                'power': 900
            },
        
            'zenistu final selection': {
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
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Unwavering Resolve: Final Selection',
                'power': 50
            },

            'zenistu tsuzumi mansion': {
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
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Unwavering Resolve: Tsuzumi Mansion',
                'power': 80
            },

            'zenistu mt natagumo': {
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
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Unwavering Resolve: Mt. Natagumo',
                'power': 90
            },

            'zenistu butterfly mansion': {
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
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Unwavering Resolve: Total Concentration Breathing',
                'power': 120
            },

            'zenistu mugen train': {
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
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Mugen Train: Thunder Breathing',
                'power': 180
            },

            'zenistu entertainment district': {
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
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Entertainment District: Thunder Breathing',
                'power': 250
            },
        
            'inosuke final selection': {
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
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Unwavering Resolve: Final Selection',
                'power': 60
            },

            'inosuke tsuzumi mansion': {
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
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Unwavering Resolve: Tsuzumi Mansion',
                'power': 90
            },

            'inosuke mt natagumo': {
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
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Unwavering Resolve: Mt. Natagumo',
                'power': 120
            },

            'inosuke butterfly mansion': {
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
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Unwavering Resolve: Total Concentration Breathing',
                'power': 170
            },

            'inosuke mugen train': {
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
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Mugen Train: Beast Breathing',
                'power': 200
            },

            'inosuke entertainment district': {
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
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Entertainment Dsitrict: Beast Breathing',
                'power': 300
            },

            'kanao butterfly mansion': {
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
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Unwavering Resolve: Total Concentration Breathing',
                'power': 160
            },

            'genya human': {
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
                'affiliation': 'Demon Slayer Corps',
                'power': 150
            },

            'genya demon': {
                'fullName': 'Genya Shinazugawa: Demon',
                'race': 'Human',
                'gender': 'Male',
                'age': '16',
                'height': '180cm (5.11)',
                'weight': '76kg (168lbs)',
                'birthday': 'January 7',
                'hairColor': 'Black',
                'eyeColor': 'Dark Purple',
                'combatStyle': 'Dual Weilding: Pistol & Katana',
                'affiliation': 'Demon Slayer Corps',
                'power': 300
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
                'affiliation': 'Demon Slayer Corps Hashira',
                'power': 800
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
                'affiliation': 'Demon Slayer Corps Hashira',
                'power': 800
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
                'affiliation': 'Demon Slayer Corps Hashira',
                'power': 700
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
                'affiliation': 'Demon Slayer Corps Hashira',
                'power': 700
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
                'affiliation': 'Demon Slayer Corps Hashira',
                'power': 900
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
                'affiliation': 'Demon Slayer Corps Hashira',
                'power': 800
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
                'affiliation': 'Demon Slayer Corps Hashira',
                'power': 1000
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
                'affiliation': 'Demon Slayer Corps Hashira',
                'power': 1000
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
                'affiliation': 'Demon Slayer Corps Hashira',
                'power': 1200
            },

            'nezuko first turned': {
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
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Unwavering Resolve: First Turned',
                'power': 30
            },

            'nezuko first mission': {
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
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Unwavering Resolve: First Mission',
                'power': 50
            },

            'nezuko asakusa': {
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
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Unwavering Resolve: Asakusa, Tokyo',
                'power': 80
            },

            'nezuko mt natagumo': {
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
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Unwavering Resolve: Mt. Natagumo',
                'power': 90
            },

            'nezuko mt natagumo barbed': {
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
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Unwavering Resolve: Mt. Natagumo Barbed',
                'power': 140
            },

            'nezuko mugen train': {
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
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Mugen Train',
                'power': 110
            },

            'nezuko entertainment district': {
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
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Entertainment District Arc: Normal',
                'power': 250
            },

            'nezuko entertainment district barbed': {
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
                'affiliation': 'Demon Slayer Corps',
                'arc': 'Entertainment District Arc: Barbed',
                'power': 500
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
                'affiliation': 'Leader of the Twelve Kizuki',
                'power': 2000
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
                'affiliation': 'Demon Slayer Corps',
                'power': 60
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
                'affiliation': 'Demon Slayer Corps',
                'power': 50
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
                'affiliation': 'Muzan Kibutsuji',
                'power': 75
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
                'affiliation': 'Muzan Kibutsuji',
                'power': 75
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
                'affiliation': 'None',
                'power': 20
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
                'affiliation': 'None',
                'power': 50
            },

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
                'affiliation': 'Spider Family',
                'power': 150
            },

            'mother': {
                'fullName': 'Mother Spider Demon',
                'race': 'Demon',
                'gender': 'Female',
                'age': '',
                'height': '',
                'weight': '',
                'birthday': '',
                'hairColor': 'White',
                'eyeColor': 'Light Blue to Pale Green',
                'combatStyle': 'Puppeteer',
                'affiliation': 'Spider Family',
                'power': 120
            },

            'son': {
                'fullName': 'Son Spider Son',
                'race': 'Demon',
                'gender': 'Male',
                'age': '',
                'height': '',
                'weight': '',
                'birthday': '',
                'hairColor': 'Grey',
                'eyeColor': 'Red(Left) Light Green(Right)',
                'combatStyle': '',
                'affiliation': 'Spider Family',
                'power': 110
            },

            'daughter': {
                'fullName': 'Spider Demon Daughter',
                'race': 'Demon',
                'gender': 'Female',
                'age': '',
                'height': '',
                'weight': '',
                'birthday': '',
                'hairColor': 'White',
                'eyeColor': 'Silver',
                'combatStyle': '',
                'affiliation': 'Spider Family',
                'power': 100
            },

            'kyogai': {
                'fullName': 'Kyogai',
                'race': 'Demon',
                'gender': 'Male',
                'age': '',
                'height': '',
                'weight': '',
                'birthday': '',
                'hairColor': 'Black',
                'eyeColor': 'Red',
                'combatStyle': 'Drum Spells',
                'affiliation': 'Twelve Kizuki: Lower Six(Formerly)',
                'power': 90
            },

            'kamanue': {
                'fullName': 'Kamanue',
                'race': 'Demon',
                'gender': 'Male',
                'age': '',
                'height': '',
                'weight': '',
                'birthday': '',
                'hairColor': 'Dark Brown to Orange',
                'eyeColor': 'Pale Blue',
                'combatStyle': '',
                'affiliation': 'Twelve Kizuki: Lower Six',
                'power': 250
            },

            'rui': {
                'fullName': 'Rui Ayaki',
                'race': 'Demon',
                'gender': 'Male',
                'age': '30',
                'height': '135cm (4.5)',
                'weight': '30kg (66lbs)',
                'birthday': '',
                'hairColor': 'White',
                'eyeColor': 'White',
                'combatStyle': 'Thread Manipulation',
                'affiliation': 'Twelve Kizuki: Lower Five/Spider Family',
                'power': 260
            },

            'mukago': {
                'fullName': 'Mukago',
                'race': 'Demon',
                'gender': 'Female',
                'age': '',
                'height': '',
                'weight': '',
                'birthday': '',
                'hairColor': 'White',
                'eyeColor': 'Greyish Purple',
                'combatStyle': '',
                'affiliation': 'Twelve Kizuki: Lower Four',
                'power': 270
            },

            'wakuraba': {
                'fullName': 'Wakuraba',
                'race': 'Demon',
                'gender': 'Male',
                'age': '',
                'height': '',
                'weight': '',
                'birthday': '',
                'hairColor': 'Black',
                'eyeColor': 'Orange',
                'combatStyle': '',
                'affiliation': 'Twelve Kizuki: Lower Three',
                'power': 275
            },

            'rokuro': {
                'fullName': 'Rokuro',
                'race': 'Demon',
                'gender': 'Male',
                'age': '',
                'height': '',
                'weight': '',
                'birthday': '',
                'hairColor': 'Dark Purple',
                'eyeColor': 'Gold',
                'combatStyle': '',
                'affiliation': 'Twelve Kizuki: Lower Two',
                'power': 280
            },

            'enmu': {
                'fullName': 'Enmu Tamio',
                'race': 'Demon',
                'gender': 'Male',
                'age': '24',
                'height': '168cm (5.6)',
                'weight': '62kg (137lbs)',
                'birthday': '',
                'hairColor': 'Black to Pink',
                'eyeColor': 'Blue',
                'combatStyle': 'Sleep Manipulation',
                'affiliation': 'Twelve Kizuki: Lower One',
                'power': 300
            },

            'gyutaro': {
                'fullName': 'Gyutaro Shabana',
                'race': 'Demon',
                'gender': 'Male',
                'age': '126',
                'height': '',
                'weight': '',
                'birthday': '',
                'hairColor': 'Black to Lime Green',
                'eyeColor': 'Red with Yellow Sclera(Right) Lime Green with Yellow Sclera',
                'combatStyle': 'Blood Manipulation',
                'affiliation': 'Twelve Kizuki: Upper Six (Formerly)',
                'power': 800
            },
            'daki': {
                'fullName': 'Daki Shabana',
                'race': 'Demon',
                'gender': 'Female',
                'age': '124',
                'height': '',
                'weight': '',
                'birthday': '',
                'hairColor': 'Silver to Lime Green',
                'eyeColor': 'Lime Green',
                'combatStyle': 'Obi Sash Manipulation',
                'affiliation': 'Twelve Kizuki: Upper Six (Formerly)',
                'power': 700
            },

            'kaigaku': {
                'fullName': 'Kaigaku Inadama',
                'race': 'Demon',
                'gender': 'Male',
                'age': '',
                'height': '167cm (5.5)',
                'weight': '64kg (141lbs)',
                'birthday': '',
                'hairColor': 'Black',
                'eyeColor': 'Turquoise with Black Sclera',
                'combatStyle': 'Thunder Breathing',
                'affiliation': 'Twelve Kizuki: Upper Six',
                'power': 900
            },

            'gyokko': {
                'fullName': 'Gyokko',
                'race': 'Demon',
                'gender': 'Male',
                'age': '133',
                'height': '150cm (4.11)(Normal)/170cm (5.7)(Molted)',
                'weight': '40kg (88lbs)(Normal)/80kg (176lbs)(Molted)',
                'birthday': '',
                'hairColor': 'Purple',
                'eyeColor': 'Honey Brown',
                'combatStyle': 'Porcelain Vase Spells',
                'affiliation': 'Twelve Kizuki: Upper Five (Formerly)',
                'power': 900
            },

            'hantengu': {
                'fullName': 'Hantengu',
                'race': 'Demon',
                'gender': 'Male',
                'age': '200',
                'height': '166cm (5.5)',
                'weight': '56kg (123lbs)',
                'birthday': '',
                'hairColor': 'Black',
                'eyeColor': 'Yellow with Red sclera',
                'combatStyle': 'Emotion Manifestation',
                'affiliation': 'Twelve Kizuki: Upper Four (Formerly)',
                'power': 1000
            },

            'nakime': {
                'fullName': 'Nakime',
                'race': 'Demon',
                'gender': 'Female',
                'age': '113',
                'height': '',
                'weight': '',
                'birthday': '',
                'hairColor': 'Black',
                'eyeColor': 'Pink',
                'combatStyle': 'Infinity Castle Manipulation',
                'affiliation': 'Twelve Kizuki: Upper Four',
                'power': 1000
            },

            'akaza': {
                'fullName': 'Akaza',
                'race': 'Demon',
                'gender': 'Male',
                'age': '133',
                'height': '173cm (5.8)',
                'weight': '74kg (163lbs)',
                'birthday': '',
                'hairColor': 'Pink',
                'eyeColor': 'Yellow with Blue sclera',
                'combatStyle': 'Destructive Death',
                'affiliation': 'Twelve Kizuki: Upper Three',
                'power': 1200
            },

            'doma': {
                'fullName': 'Doma',
                'race': 'Demon',
                'gender': 'Male',
                'age': '133',
                'height': '187cm (6.1)',
                'weight': '86kg (190lbs)',
                'birthday': '',
                'hairColor': 'Blonde',
                'eyeColor': 'Rainbow',
                'combatStyle': 'Tessen Jujitsu/Cryokinesis',
                'affiliation': 'Twelve Kizuki: Upper Two',
                'power': 1400
            },

            'kokushibo': {
                'fullName': 'Kokushibo',
                'race': 'Demon',
                'gender': 'Male',
                'age': '480',
                'height': '190cm (6.3)',
                'weight': '93kg (205lbs)',
                'birthday': '',
                'hairColor': 'Black with Red tips',
                'eyeColor': 'Gold with Red Sclera',
                'combatStyle': 'Moon Breathing',
                'affiliation': 'Twelve Kizuki: Upper One',
                'power': 1500
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
        'affiliation': '',
        'power': ''
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