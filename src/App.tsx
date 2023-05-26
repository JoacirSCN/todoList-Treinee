import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme'
import { GlobalStyle } from './styles/global'

import * as C from './styles/global'
import { useState } from 'react'
import { Item } from './@types/Item'
import { ListItem } from './components/ListItem'
import { AddArea } from './components/AddArea'

export function App() {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: 'Comprar o pão na padaria',
      done: false,
    },
    {
      id: 2,
      name: 'Comprar o bolo na padaria',
      done: false,
    },
  ])

  function handleAddTask(taskName: string) {
    const newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    })

    setList(newList)
  }

  /* modificar lista */
  function handleTaskChange(id: number, done: boolean) {
    const newList = [...list]
    for (const i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done
      }
    }

    setList(newList)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <C.Container>
        <C.Area>
          <C.Header>Lista de Tarefas</C.Header>

          <AddArea onEnter={handleAddTask} />

          {list.map((item, index) => (
            <ListItem key={index} item={item} onChange={handleTaskChange} />
          ))}
        </C.Area>
      </C.Container>
    </ThemeProvider>
  )
}
