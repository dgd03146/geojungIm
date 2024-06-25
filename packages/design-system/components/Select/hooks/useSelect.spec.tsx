import { describe, expect, it } from 'vitest';

import { renderHook } from '@testing-library/react';
import { useSelect } from './useSelect';

describe('useSelect', () => {
	it('should return empty string for no children', () => {
		const { result } = renderHook(() => useSelect());
		expect(result.current.getChildText(null)).toBe('');
	});

	it('should return text for string children', () => {
		const { result } = renderHook(() => useSelect());
		expect(result.current.getChildText('Hello')).toBe('Hello');
	});

	it('should return text for number children', () => {
		const { result } = renderHook(() => useSelect());
		expect(result.current.getChildText(123)).toBe('123');
	});

	it('should return concatenated text for multiple string children', () => {
		const { result } = renderHook(() => useSelect());
		expect(result.current.getChildText(['Hello', ' ', 'World'])).toBe(
			'Hello World',
		);
	});

	it('should return concatenated text for nested children', () => {
		const { result } = renderHook(() => useSelect());
		const children = (
			<div>
				<span>Hello</span>
				<span> </span>
				<span>World</span>
			</div>
		);
		expect(result.current.getChildText(children)).toBe('Hello World');
	});

	it('should return concatenated text for deeply nested children', () => {
		const { result } = renderHook(() => useSelect());
		const children = (
			<div>
				<span>
					<strong>Hello</strong>
				</span>
				<span> </span>
				<span>
					<em>World</em>
				</span>
			</div>
		);
		expect(result.current.getChildText(children)).toBe('Hello World');
	});

	it('should return concatenated text for mixed children types', () => {
		const { result } = renderHook(() => useSelect());
		const children = (
			<div>
				<span>Hello</span>
				<span> </span>
				<span>{123}</span>
			</div>
		);
		expect(result.current.getChildText(children)).toBe('Hello 123');
	});
});
