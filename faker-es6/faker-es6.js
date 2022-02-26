import { faker } from '@faker-js/faker'
import fs from 'fs';

const populateFile = () => {
    for (let i = 0; i < 1000; i++){
        fs.appendFile('fake-names.txt', faker.name.findName() + '\n', (err) => {
            if (err) console.log('Hubo un error');
        });
    };
    console.log('Archivo creado');
};

populateFile();
