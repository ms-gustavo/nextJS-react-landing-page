import { screen } from '@testing-library/react';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

function expectStyles(element, styles) {
  Object.entries(styles).forEach(([property, value]) => {
    expect(element).toHaveStyleRule(property, value);
  });
}

describe('<Heading/>', () => {
  it('should render with default values', () => {
    renderTheme(<Heading> texto </Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expectStyles(heading, {
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.xlarge,
      'text-transform': 'none',
    });
  });
  it('should render with white color', () => {
    renderTheme(<Heading colorDark={false}> texto </Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expectStyles(heading, {
      color: theme.colors.white,
    });
  });
  it('should render correct heading sizes: small', () => {
    renderTheme(<Heading size="small"> texto </Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expectStyles(heading, {
      'font-size': theme.font.sizes.medium,
    });
  });
  it('should render correct heading sizes: medium', () => {
    renderTheme(<Heading size="medium"> texto </Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expectStyles(heading, {
      'font-size': theme.font.sizes.large,
    });
  });
  it('should render correct heading sizes: big', () => {
    renderTheme(<Heading size="big"> texto </Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expectStyles(heading, {
      'font-size': theme.font.sizes.xlarge,
    });
  });
  it('should render correct heading sizes: huge', () => {
    renderTheme(<Heading size="huge"> texto </Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expectStyles(heading, {
      'font-size': theme.font.sizes.xhuge,
    });
  });
  // it('should render correct font-size when using mobile', () => {

  //   renderTheme(<Heading size="huge">texto</Heading>);
  //   const heading = screen.getByRole('heading', { name: 'texto' });

  //   expect(heading).toHaveStyleRule('font-size', theme.font.sizes.xlarge, {
  //     media: theme.media.lteMedium,
  //   });
  // });
  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase> texto </Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expectStyles(heading, {
      'text-transform': 'uppercase',
    });
  });
  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6"> texto </Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
