import { faker } from "@faker-js/faker";
import { fireEvent, screen } from "@testing-library/react";
import ColorPicker from "shared/components/ColorPicker/ColorPicker";
import render from "shared/util/test/render";

const label = "Color";
const id = faker.datatype.uuid();
const value = faker.internet.color();

describe("Component <ColorPicker />", () => {
	test("Should mount the component", () => {
		const { container } = render(<ColorPicker {...{ label, id }} />);
		expect(container).toBeDefined();
	});

	test("Should unmount the component", () => {
		const { container, unmount } = render(
			<ColorPicker {...{ label, id }} />
		);
		unmount();
		expect(container).toBeEmptyDOMElement();
	});

	test("Forwards ref correctly", () => {
		const ref = { current: null };
		render(<ColorPicker label={label} id={id} ref={ref} />);

		expect(ref.current).toBeInTheDocument();
	});

	it("Should trigger event", () => {
		const handleChange = jest.fn();
		render(<ColorPicker label={label} id={id} onChange={handleChange} />);

		const input = screen.getByLabelText(label);
		fireEvent.change(input, { target: { value } });

		expect(handleChange).toHaveBeenCalled();
		expect(input).toHaveValue(value);
	});
});
