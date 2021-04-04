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
                    children: [{
                        name: "Folder 1.2.1",
                        children: []
                    }]
                }
            ]
        },
        {
            name: "Folder 2",
            children: [{
                name: "Folder 2.1",
                children: []
            }]
        }
    ]
};

const getAllFolders = (folder) => {
    let path = folder.name + " " + folder.children.filter(sub => sub.name).map(subfolder => getAllFolders(subfolder)).join(" ");
    return path;
}

console.log(getAllFolders(root));