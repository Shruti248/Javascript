export function getAllDogs() {
    // Your code here
    return fetch('/dogs')
}

export function getDogNumberTwo() {
    // Your code here
    return fetch('/dogs/2')
}

export function postNewDog(name, age) {
    // Your code here
    const formData = new URLSearchParams();
    formData.append('name', name);
    formData.append('age', age);


    return fetch('/dogs', {
        method: 'POST',
        headers: {
            "Content-type": "application/x-www-form-urlencoded"
        },
        body: formData
    })
}

export function postNewDogV2(name, age) {
    // Your code here
    const dogData = new URLSearchParams();
    dogData.append('name', name);
    dogData.append('age', age);

    return fetch('/dogs', {
        method: 'POST',
        body: dogData,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

export function deleteDog(id) {
    // Your code here
    const authToken = 'ckyut5wau0000jyv5bsrud90y';

    return fetch(`/dogs/${id}/delete`, {
        method: `POST/${id}`,
        headers: {
            'AUTH': authToken
        }
    })
}
