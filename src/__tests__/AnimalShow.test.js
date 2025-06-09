import { render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import AnimalShow from "../AnimalShow";

test("should render animalShow component", () =>
{
    render(<AnimalShow/>);

    const asElement = screen.getByTestId("t-1");
    expect(asElement).toBeInTheDocument();
    expect(asElement).toHaveTextContent("cat");
})