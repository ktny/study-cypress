describe("My First Test", () => {
  it("Visits the Kitchen Synk", () => {
    // 指定のURLに遷移する
    cy.visit("https://example.cypress.io")

    // typeという文字列が含まれている要素をクリック
    cy.contains("type").click()

    // 遷移後のURLに/commands/actionsが含まれているかをチェック
    cy.url().should("include", "/commands/actions")

    // .action-email要素にfake@email.comと入力し、valueがfake@email.comであるかをチェック
    cy.get(".action-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com")
  })
})
