import React from 'react'
import { create } from 'react-test-renderer'
import ProfileStatus from './ProfileStatus'

describe('ProfileStatus component', () => {
  test('status from props should be in the state', () => {
    // @ts-ignore
    const component = create(<ProfileStatus status="SN" />)
    const instance = component.getInstance()
    // @ts-ignore
    expect(instance.state.status).toBe('SN')
  })

  test('after creation <span> should be displayed', () => {
    // @ts-ignore
    const component = create(<ProfileStatus status="SN" />)
    const root = component.root
    const span = root.findByType('span')
    expect(span).not.toBeNull()
  })
  test("after creation <input> shouldn't be displayed", () => {
    // @ts-ignore
    const component = create(<ProfileStatus status="SN" />)
    const root = component.root
    expect(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const input = root.findByType('input')
    }).toThrow()
  })

  test('after creation <span> should contains correct status', () => {
    // @ts-ignore
    const component = create(<ProfileStatus status="SN" />)
    const root = component.root
    const span = root.findByType('span')
    expect(span.children[0]).toBe('SN')
  })

  test('input should be displayed in editMode instead of span', () => {
    // @ts-ignore
    const component = create(<ProfileStatus status="SN" />)
    const root = component.root
    const span = root.findByType('span')
    span.props.onDoubleClick()
    const input = root.findByType('input')
    expect(input.props.value).toBe('SN')
  })

  test('callback should be called', () => {
    const mockCallback = jest.fn()
    const component = create(
      <ProfileStatus status="SN" updateStatus={mockCallback} />
    )
    const instance = component.getInstance()
    // @ts-ignore
    instance.deactivateEditMode()
    expect(mockCallback.mock.calls.length).toBe(1)
  })
})
