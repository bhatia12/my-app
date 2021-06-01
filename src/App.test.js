import { render, screen, cleanup } from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
  render(<App />);
  // const component = renderer.create(<App />).getInstance()
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  // const tree = h1;
  // expect(tree).toBe(Shubham)
  const element = screen.getByTestId('todo-1');
  expect(element).toBeInTheDocument() 
  expect(element).toHaveTextContent('Shubham')
});
