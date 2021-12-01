Szkolenie React

Został dodany przykładowy projekt w 14.Typescript, który realizuje wszystko z naszej aplikacji finansowej, tylko w TypeScript
Od razu poprawiony został mechanizm odświeżania listy po dodaniu elementu.

Testowanie:
    Po pierwsze prosty błąd:
    setTimeout(resolve[ProductService.list], 500)

    brakowało nawiasów:
    setTimeout(resolve([ProductService.list]), 500)

    Po drugie:
        expect(productList.count()).toEqual(4);
        expect(productList[0]).toEqual('<div className="products">3</div>');

    brakowało children
        expect(productList.children.length).toEqual(4);
        expect(productList.children[0]).toEqual('3');

    Teraz wszystko działa i widać w logach: (co oznacza, ze udało się wywołać testy z mocków)
    console.log
      MOCKS!!!!

      at ProductService.getProducts (src/services/__mocks__/ProductService.js:8:17)


