/// <reference types="cypress" />
import React from 'react'
import { mount } from '@cypress/react'

describe('Accessibility', () => {
  before(() => {
    // https://github.com/avanslaars/cypress-axe
    cy.injectAxe()
  })

  // https://www.w3.org/WAI/standards-guidelines/aria/
  context('aria', () => {
    it('passes', () => {
      mount(
        <input
          type="text"
          aria-label="label text"
          aria-required="true"
          value="John Smith"
          name="name"
        />,
      )

      cy.checkA11y('input', {
        runOnly: {
          type: 'tag',
          values: ['wcag2a'],
        },
      })
    })
  })
})