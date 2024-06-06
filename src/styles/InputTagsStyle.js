import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    // flexGrow: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    // justifyContent: 'center',
    borderColor: 'lightgray',
    borderWidth: 1
  },
  tagContainer: {
    // flex: 1,
    flexShrink: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    backgroundColor: 'gainsboro',
    paddingVertical: 0,
    paddingRight: 0,
    margin: 5,
    borderRadius: 5
  },
  tagText: {
    // flex: 1,
    flexWrap: 'nowrap',
    // flexShrink: 0,
    // minWidth: 100,
    color: 'black',
    fontSize: 12,
    paddingHorizontal: 10,
    fontWeight: 'bold'
  },
  input: {
    flex: 1
  },
  removeButton: {
    height: 20,
    paddingHorizontal: 5
  }
})
