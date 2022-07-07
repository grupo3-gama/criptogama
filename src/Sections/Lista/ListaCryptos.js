import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Lista } from '../../Config/Api'
import { CryptoState } from '../../Config/Mudarmoeda'
import {
  Container,
  TableCell,
  LinearProgress,
  ThemeProvider,
  Typography,
  TextField,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  Paper,
  Pagination
} from '@mui/material';


export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const ListaCryptos = () => {

  const [coins, setCoins] = useState([])
  const[loading, setLoading] = useState([false]);
  const[buscar, setBuscar] = useState('');  
  const {currency, symbol} = CryptoState();
  const [page, setPage] = useState(1);

  const buscarCoins = async () => {
    setLoading(true)
    const { data } = await axios.get(Lista(currency));
    setCoins(data)
    setLoading(false)

  };

  console.log(coins);

  useEffect(() => {
    buscarCoins()
  },[currency]);

  const buscaManual = () => {
    return coins.filter((coin) =>
      coin.name.toLowerCase().includes(buscar) ||
      coin.name.toLowerCase().includes(buscar)
    )
  }


  return (
    <Container style={{ textAlign: "center" }}>
    <Typography
      variant="h4"
      style={{ margin: 18, fontFamily: "Montserrat" }}
    >
    </Typography>
    <TextField
      label="Buscar..."
      variant="outlined"
      style={{ marginBottom: 20, width: "100%" }}
      onChange={(e) => setBuscar(e.target.value)}
    />
    <TableContainer component={Paper}>
      {loading ? (
        <LinearProgress style={{ backgroundColor: "gold" }} />
      ) : (
        <Table aria-label="simple table">
          <TableHead style={{ backgroundColor: "#EEBC1D" }}>
            <TableRow>
              {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                <TableCell
                  style={{
                    color: "black",
                    fontWeight: "700",
                    fontFamily: "Montserrat",
                  }}
                  key={head}
                  align={head === "Coin" ? "" : "right"}
                >
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {buscaManual()
              .slice((page - 1) * 10, (page - 1) * 10 + 10)
              .map((row) => {
                const profit = row.price_change_percentage_24h > 0;
                return (
                  <TableRow
                    className={row}
                    key={row.name}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      style={{
                        display: "flex",
                        gap: 15,
                      }}
                    >
                      <img
                        src={row?.image}
                        alt={row.name}
                        height="50"
                        style={{ marginBottom: 10 }}
                      />
                      <div
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <span
                          style={{
                            textTransform: "uppercase",
                            fontSize: 22,
                          }}
                        >
                          {row.symbol}
                        </span>
                        <span style={{ color: "darkgrey" }}>
                          {row.name}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell align="right">
                      {symbol}{" "}
                      {numberWithCommas(row.current_price.toFixed(2))}
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{
                        color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                        fontWeight: 500,
                      }}
                    >
                      {profit && "+"}
                      {row.price_change_percentage_24h.toFixed(2)}%
                    </TableCell>
                    <TableCell align="right">
                      {symbol}{" "}
                      {numberWithCommas(
                        row.market_cap.toString().slice(0, -6)
                      )}
                      M
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      )}
    </TableContainer>

    {/* Comes from @material-ui/lab */}
    <Pagination
      count={(buscaManual()?.length / 10).toFixed(0)}
      style={{
        padding: 20,
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
      classes='moeda'
      onChange={(_, value) => {
        setPage(value);
        window.scroll(0, 450);
      }}
    />
  </Container>
  )
}

export default ListaCryptos