import { screen } from '@testing-library/react';
import { TextComponent } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<TextComponent/>', () => {
  it('should render a text', () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });
  it('should match snapShot', () => {
    const { container } = renderTheme(<TextComponent>Children</TextComponent>);
    expect(container).toMatchSnapshot();
  });
});
