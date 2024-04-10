import { assignInlineVars } from "@vanilla-extract/dynamic";
import { Box, type BoxProps, ListItem, type ListItemComponent } from "..";

import {
	type KeyboardEvent,
	type LiHTMLAttributes,
	type PropsWithChildren,
	type ReactNode,
	forwardRef,
	useEffect,
	useRef,
} from "react";
import { CheckIcon } from "../../icons";
import { palette } from "../../tokens/palette";
import * as styles from "./SelectItem.css";
import { useSelectContext } from "./SelectProvider";
import { useKeyboardNavigation } from "./hooks/useKeyboardNavigation";
import { useSelect } from "./hooks/useSelect";

interface Props extends PropsWithChildren<LiHTMLAttributes<HTMLLIElement>> {
	value: string;
}

// FIXME: 어떻게 List 컴포넌트를 활용할 수 있을까?

type ListProps = BoxProps<"li", Props>;
export type ListComponent = (props: ListProps) => ReactNode;

export const SelectItem: ListComponent = forwardRef(
	({ children, id, value, disabled, ...restProps }: ListProps, ref?) => {
		const {
			selectedOption,
			setOpen,
			onValueChange,
			setSelectedOption,
			setOptions,
			defaultValue,
		} = useSelectContext();

		const { getChildText } = useSelect();
		const childText = getChildText(children);
		const optionRef = useRef<HTMLLIElement>(null);
		const optionValue = {
			label: childText,
			value,
			isDisabled: !!disabled,
		};

		// defaultValue로 준 값이랑 value가 같으면 default로 선택된 아이템
		const selectedOptionItem = defaultValue === value;

		// options 배열에 선택된 optionValue를 넣어준다.

		// TODO: defaultValue 있을때 값 지정
		// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
		useEffect(() => {
			setOptions((prev) => [...prev, optionValue]);
			if (selectedOptionItem) {
				// 초기에 지정한 옵션이 있으면 그 아이템에 포커스를 준다!.
				optionRef.current?.focus();

				// 초기 지정한 default 옵션이 있으면 그 옵션을 선택된 옵션으로 지정

				// setSelectedOption(optionValue);
				// if (onValueChange) {
				//   onValueChange(defaultValue);
				// }
			}
		}, []);

		// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
		useEffect(() => {
			if (selectedOption.value === value) {
				optionRef.current?.focus();
				return;
			}
		}, [open]);

		// const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
		// 	switch (e.key) {
		// 		case "ArrowUp":
		// 			// ArrowUp 키에 대한 처리
		// 			console.log("arrow up");
		// 			break;
		// 		case "ArrowDown":
		// 			// ArrowDown 키에 대한 처리
		// 			console.log("arrow DOWN");
		// 			break;
		// 		case "Enter":
		// 			console.log("enter");
		// 			if (onValueChange) {
		// 				setSelectedOption(optionValue);
		// 				onValueChange(optionValue.value);
		// 			}
		// 			setOpen(false);

		// 			break;
		// 		case "Escape":
		// 			setOpen(false);
		// 			break;
		// 		default:
		// 			// 다른 키에 대한 처리
		// 			break;
		// 	}
		// };

		return (
			<Box
				as="li"
				role="option"
				aria-selected={value === selectedOption?.value}
				data-disabled={disabled}
				tabIndex={0}
				display="flex"
				justifyContent="space-between"
				// columnGap="1"
				color="white"
				paddingX="2.5"
				paddingY="1.5"
				fontSize="sm"
				minWidth="40"
				boxSizing="border-box"
				caretColor="transparent"
				cursor="pointer"
				id={id}
				ref={optionRef}
				className={styles.li}
				background={value === selectedOption?.value && "primary"}
				// style={assignInlineVars({
				//   [styles.selectedColor]:
				//     value === selectedOption?.value && palette.primary,
				// })}
				{...restProps}
				// onKeyDown={(e) => {
				//   e.preventDefault();
				//   console.log('onKeyDown 실행중', e.key);
				//   handleKeyDown(e);
				// }}
				onFocus={() => {
					if (optionRef.current) {
						optionRef.current.dataset.focus = "focus";
					}
				}}
				onBlur={() => {
					if (optionRef.current) {
						optionRef.current.dataset.focus = "";
					}
				}}
				onMouseEnter={() => {
					optionRef.current?.focus();
				}}
				onClick={() => {
					if (!disabled && onValueChange) {
						setSelectedOption({
							value,
							label: childText,
							isDisabled: !!disabled,
						});
						setOpen(false);

						onValueChange(value);
					}
				}}
			>
				{/* FIXME: Text 컴포넌트로 변경하기 */}
				<span>{childText}</span>
				{value === selectedOption?.value && <CheckIcon />}
			</Box>
		);
	},
);