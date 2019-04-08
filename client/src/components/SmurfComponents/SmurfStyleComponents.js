import styled from 'styled-components'
import { color, colorScheme, fontSizing, 
  flex, breakpoints } from '../StyleComponents/theme'

export const SmurfListContainer = styled.div`
  width: 90%;
  ${flex('column','center','center')}
  max-width: 600px;
  padding: 20px 10px;
  background: ${color.lightText};
  font-size: ${fontSizing.sm};

  a {
    text-decoration: none;
    color: ${colorScheme.defaultFontColor};
  }

  @media ${breakpoints[0]} {
    h1 {
      font-size: ${fontSizing.m};
    }
  }


`

export const Preview = styled.div`
  width: 90%;
  min-width: 300px;
  ${flex('row', 'center', 'space-between')}
  margin: 10px 0;
  padding: 10px;
  border: 0.5px solid ${color.primaryBgShading};
  box-shadow:  5px 5px 5px 0px rgba(89,89,89,1);
  background: ${color.primaryBgShading};
  cursor: pointer;

  &:hover {
    color: ${color.lightText};
    background: ${colorScheme.defaultFontColor};
  } 

`

export const SmurfInfoContainer = styled.div`
  ${flex('column')};
  width: 80%;
  min-width: 300px;
  max-width: 600px;
  margin: 20px 0;
  
  border-radius: 5px;
  box-shadow:  10px 10px 5px 0px rgba(0,0,0,0.75);
  background: ${color.lightText};

  header {
    width: 100%;
    ${flex('row', 'center', 'flex-end')};
    margin: 0;
    padding: 10px;
    border-radius: 5px 5px 0 0;
    background: linear-gradient(to top, #cccccc 0%, #d6d6d6 1px, #ebebeb 100%); 
    
    i {
        margin: 0 10px;
        font-size: ${fontSizing.xs};
        cursor: pointer;
    }
  }

  .smurf-info {
    ${flex('column', 'flex-start', 'center')}
    padding: 20px;

    h3 {
      margin: 10px 0;
      font-size: ${fontSizing.m};
      font-weight: bold;
      color: ${colorScheme.headingColor};
    }

    input:first-child {
      margin: 10px 0;
      font-size: ${fontSizing.s};
    }
    .smurf-stats {
      display: grid;
      grid-template-columns: 1fr 4fr;
      grid-gap: 10px;
      
      & * {
        font-size: ${fontSizing.s};

        @media ${breakpoints[0]} {
          font-size: ${fontSizing.xs};
        }
      }

      .stat-category {
        font-weight: bold;
      }

    }

    @media ${breakpoints[0]} {
      h3 {
        font-size: ${fontSizing.sm};
      }
    }
}

`

export const ButtonMenu = styled.nav`
  align-self: center;
  width: 80%;
  margin-top: 20px;
  display: ${props => !props.edit ? 'none' : 'flex'};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    width: 100px;
    font-size: ${fontSizing.xs};
  }

  @media ${breakpoints[0]} {
    button {
      width: 70px;
      font-size: ${fontSizing.xxs};
      margin-bottom: 20px;
    }
  }
`


