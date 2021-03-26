// Город - Школы - Классы - Ученики
const city = [{
        name: "№1",
        groups: [{
                name: "1А",
                pupils: ["Антон", "Андрей"]
            },

            {
                name: "2А",
                pupils: ["Хаккназар", "Нурасыл"]
            },

            {
                name: "1Я",
                pupils: []
            }
        ]
    },
    {
        name: "№45",
        groups: [{
                name: "1А",
                pupils: ["Антон", "Андрей"]
            },

        ]
    }
];


const getAllGroups = city =>
    city.map(school => school.groups.map(group => group.pupils.length)).flat(Infinity);



// const getAllGroups = city => {
//   let arr = [];
//   for(let i = 0; i < city.length; i++){
//       for(let j = 0; j < city[i].groups.length; j++){
//           arr.push(city[i].groups[j].name);
//       }
//   }
//   return arr;
// }

const getAllPupils = city =>
    city.map(school => school.groups.filter(group => group.name[0] === "1").map(group => group.pupils)).flat(Infinity);


const root = {
    name: "C:",
    children: [{
            name: "Folder 1",
            children: [{
                    name: "Folder 1.1",
                    children: []
                },
                {
                    name: "Folder 1.2",
                    children: []
                },
            ]
        },
        {
            name: "Folder 2",
            children: [{
                name: "Folder 2.1",
                children: []
            }, ]
        },
    ]
}

// const getAllFolders = (folder) => {
//     return [folder.name, ...folder.children.map(subfolder => getAllFolders(subfolder))].flat(Infinity);
// }
const getAllFolders = (folder) => {
    return [folder.name, folder.children.map(subfolder => getAllFolders(subfolder))].flat(Infinity);
}

const getAllPathes = (folder, parentPath = "") => {
    const path = parentPath + folder.name + "/";
    return [path, folder.children.map(subfolder => getAllPathes(subfolder, path))].flat(Infinity);
}

console.log(getAllFolders(root));
console.log(getAllPathes(root));



const html = {
    tag: "html",
    children: [{
        tag: "head",
        children: [{
            tag: "title",
            children: [{
                tag: "TEXT",
                value: "our page",
                children: [],
            }]
        }]
    }],
    tag: "body",
    children: [{
        tag: "div",
        children: [{
            tag: "div",
            children: [{
                tag: "TEXT",
                value: "our page",
                children: [],
            }]
        }]
    }]
}

const getAllSelectors = (tag, parentPath = "") => {
    const path = parentPath + tag.name;
    let map = {
        [path]: tag,
    };
    tag.children.map(child => getAllSelectors(child, path + " ")).forEach(r => {
        map = {...map, ...r };
    });
    return map;
}


console.log(getAllSelectors(html));


const findTagsBySelector = (document, selector) => {
    const map = getAllSelectors(document);
    return Object.entries(map).filter(([key, _]) => key.endsWith(selector))
}