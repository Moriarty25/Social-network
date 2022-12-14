export const createPages = (pages, pagesCount, currentPage) => {
    if(pagesCount > 11) {
        if(currentPage > 5) {
            for (let i = currentPage-5; i <=currentPage+5; i++) {
                pages.push(i)
                if(i === pagesCount) break
            }
        }
        else {
            for (let i = 1; i <= 11; i++) {
                pages.push(i)
                if(i === pagesCount) break
            }
        }         
    } else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
    }
}