/* file includes datatypes used across multiple files

we also can declare arrays or vars here
*/
type dataType = {
    id: string; // UID(unique identifier) for each element in list
    title: string; // what you want to display
};

const DATA: dataType[] = [
    { id: "1", title: "First Item" },
    { id: "2", title: "Second Item" },
    { id: "3", title: "Third Item" },
    { id: "4", title: "Fourth Item" },
];

export default function Index() {
    // Your existing code here
}

export { dataType, DATA };
