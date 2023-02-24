let nextId = 0
export default function generateId(){
    const id = nextId
    nextId += 1
    return id;
}