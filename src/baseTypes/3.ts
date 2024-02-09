let some: unknown;
some = 'Text';
let str: string;
if (typeof some === "string") {
	str = some;
} else {
	throw new Error("Error");
}


export {};