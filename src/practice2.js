const inject = (items, sections) =>{
    sections.sort((a,b) => b.index - a.index);
    sections.forEach((i) =>{
        items.splice(i.index, 0, i.content);
    })
    return items;
}
export { inject };
