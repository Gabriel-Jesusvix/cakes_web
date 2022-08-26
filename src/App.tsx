import { Header } from "./components/Header";
import backgroundTransparent from "./assets/images/background.jpeg";
import { useEffect } from "react";

export default function App() {
  // useEffect(() => {
  //   alert(
  //     "Seja bem vindo! Site em criação, entre em contato com (27)9.9589-9522"
  //   );
  // });
  return (
    <div className="min-h-full mt-10">
      <Header />
      <div className=" w-full justify-center items-center flex mt-36  h-72 flex-col">
        <img
          src={backgroundTransparent}
          alt="background-transparent"
          className=" flex opacity-20 h-full w-full "
        />
        <section className="items-center text-center absolute">
          <h1 className="font-poppins font-bold text-primary text-4xl">
            Nira Cakes
          </h1>
          <h2 className="font-poppins font-normal text-2xl ">
            Sua festa começa aqui.
          </h2>
          <span className="font-poppins font-normal text-sm italic">
            Adoçando & Eternizando momentos❤️
          </span>
        </section>
      </div>
      <div className="mt-28 justify-center items-center flex flex-col">
        <h1 className="font-poppins font-bold text-primary text-3xl italic underline">
          Reviews
        </h1>
        <div
          id="animation-carousel"
          className="relative w-full h-full mt-10"
          data-carousel="slide"
        >
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div
              className="hidden duration-10 ease-linear absolute inset-0 transition-all transform"
              data-carousel-item=""
            >
              <img
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/wdy050121lifeoftheparty-003-1621611282.jpg?crop=0.998xw:0.337xh;0,0.278xh&resize=1200:*"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>

            <div
              className="duration-20 ease-linear absolute inset-0 transition-all transform -translate-x-full z-10"
              data-carousel-item=""
            >
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFhUYGBgaHB4aGhoYGBoaGhwcHBgaGhgcGhgcIS4lHB4rHxkYJzgmKzAxNTU1HCQ7QDs0Py40NTEBDAwMEA8QHxISHjQrISs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAJ8BPgMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAABAgMEBQYHAAj/xABBEAACAQIEAwUFBQYFAwUAAAABAhEAAwQSITEFQVEGImFxkTKBobHwExRCwdEHI1JiouEWcoKS0kOy8RUXM1Nj/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJBEAAgICAgIDAQADAAAAAAAAAAECEQMhEjFBUQQTYSIygZH/2gAMAwEAAhEDEQA/ANbc1y0BOtGWkUA1FUUYUaKAAFBRooGoA4muFEij0AczACTpTS3j7blgtxGKkhgGBKlfakcop4BOlYj2qezhseWAZ3Rsxyu65SQMqhlIJ0y6SBuKBGocX49bW0TbuAsR3conMc2XKumrSDp4VTuH8dxhuMtyciqXfNoAoI5xvJECmi8cy4VHaEZgcgVNkMyQJ0YyDPSPGqY/EnZmzMWD6MCTBGm/WuWSc3/XXlHs/G+Pfx3aVvps0N+3T5M2HtAjPBNxgNBrAUHUmrj2d4v95srcKFGkqynkVMGPA7isLTBXXIyMFtroCxI73PTn0mtN7L/b2sucShRZMzDAQ3kD+XjVKUMa4x8eDy+L/wAWtl6Y0VhRQ86iuJrbszBFA1ATXTVCYCmhZq6KKRQAbNQCuC0IWgAIo1cFrmFAzjRWYASdBRjUfxrDF7DrrBEHLvHgOdS3SsqEVKSTZX+0HaYZGSwxzsJR0Ibugw5mDlPQkHeqL2Z4ndR7zvccfZADJnYKzOGlipPejKIA335VK8I4Qzs4thxbz5bl9wF7uUd1VPMk+O6zEa1/7pdxGJazZsZLhYjKCAQqNqzsQIA8dRtvpWcW2nZ25oYcOSPHa8+wycXdbhuq75QTmIZjrBAhuYkjepcccuPbdg913iFzMQgBnR9NffNVPj5uJca0ZUBioUK2XumDlYjvGdZE7jnR3t4mzBuIyIwBViNxHnuZ23qXj6pmXys7zSUqqtFv/Z/2vcsbeJfuNJV3MkNOg20Uzz2jxrTSKxzhXZ98SguWmVWSMyEHv7mA8wDEDbcbitV4Ijrh7avo6oAwmdR4/W1bOUerOV29j1DXNvQkVxpMEdQrSZpVRRQHPSZFKMKbX2IpsA7CiUkt4bGhLdKQybRYo7muUUBqyQBRhRWNCpoGCTRZrmNFNABpoQaJQg0AC75QTtpWP9oeyl+/j7iWxOfv/aEwiDQHPz00AAGvrF+7Y8UexbGRAxeQZ2UaDNHMiZAqtdneMCzda/cuKyYhVWPtMzK1skz3okHM0x4VjKTi7RooXGxHjHYm8FtoLtsi2igdwqWIGVjAnkBuarmE7Kv9qyuRkWBKGc7MdFGkjTer12g7U2EurD5xEyneUT1Iqtv2qQYkMqfuhJB1zF8uhynYcq5nKTukdcc0+Kjfgl7PZ+wphVgWyJEkgmBMg+NTuAYhmQwOYjaDyqpYTtcgRyyMGMlQYhiTzblUC/ay6txnDz9pplSISBEqTz86iOOUnbMq7NdwmJViyAyU38J2FOSazP8AZvj3bEXE1YOssxYnKVOmp3JzGtLruhqNHPNVI5jR1ohFGBrQg6gzV01zDagA4NcaKtCTQM4Vxomeuz0CDA0GMuDIdY0+W9EzVQu3eIZLxYM4JszbCnulwzaMp5QSdN9JmBWWVWqNMauRd7mLT7FYZW0VjqDv3gSKhcNxPDC9iCptq7IHL90GCZYFuepBrLuJ8fxDoFZ8maJCpBf+WByE71AFHIAzEgajcieWh03MVj9bfbNeKRrON43hnfIzoQioytIIklswzbA6A++l8ZxzDd2HU6DaWEADpWL4gNJkEHx1oVJWAGKwN5PM86awr2Js2DB8fw1vPlIVRyykA/5RHXapPg3aZMQ620U65u9IOwkbVh2QkamfGD+dWPsBbnGWgCQA2b3hSY94q4wUd2Jq0beK6ik101qYnUqu1ENGmKAOJpNxXNXPtQA2e2Jo4tjlRHWd6UGlJgiTDmhFyiTQ1YBi9GD0lNGmgA2auLUWgagAS9cHopNEUmpAj+1OHu3bBS1bV50aSAyxBDJPP31jGMwF4D/4bigEkLlJyNI1BA20IPn41q3ajit20FyMV1GYAAyGME6g7a1BWu3ahFD2wQpyF95HWI8DoOlYSl/To6IRko9GYX3uB2DuwKjUOSDI2AWm/wB6uad/00rXfveExJ7y22YeQYHyOoqCx6cJRirAEgmQjOYJ1Oq7etCyfgFAu4l3AV2MA+E+fjUlwbg97EGESR/EZVRqJ70anwHjVqHGeFIhCWBIOkoXY+IJ0HvNReN7aOy5LSi0pEAjVo8IECqt+EJMvvZPD2sK64ZSrXHT7S5lIOUgDRuYBnQVbmFZH+z24Riwzme45JmN41PM++taLVUXqjPIqZxNDNEoZ2q7IBRt6OxqH7Qcct4RA7gktIQDTMwE5cx0BI2G55U1wHa7D3kZkzqV0C3ALec8gjk5GPgCSOlAE5dxCqRmdVnbMwE+U70KvIkajqNRVFv8bS+zu/cIUKihpI9tmLaDkojQ6nnIqCt4nEODcQuiKZXOxRCe9kKvPUnUA7b61kstvS0aYcX2Nq6pX7/0ammIQkqHUspgqGBYGJgjcGCDShNefsNxN7WJD/jRwTOuVswDCCT03nWty4XxWziULWnzBdCIIIPKQfnW5m0PlaoztBwCxilUu7IwBXMhgkfwmQdJ8j41IqahOM8f+6XO8huI6ghQBIZSQSJ3ERPkKzm9FY07/krV/sKjGWvO2kDKoEA7xJM1E4rsOFIyXLhjYOkx5FQI9KkeKftRuju2sMij+J2LE6xELAHqajf/AHKuE962AP5WEj1Wsal4Nbfkj8V2FxG6HOZ07pX1nSl8L2Bcg/a3AnRQuY789dvWpGz29RzL/aIvMkSPdk1PpT6326wqozLnZh7IKEZj1BOgHifSlyydUMiLvYONTeAXcsyxJG8KDUx2cu4HBsuW7ndiFlYJgmNhoANzrtVE4nx2/iHLu5ynULqFUHkBz0589aJgNQpgEie6NxtA98jQVXF9tjq9G9B6Lmg0kp0EiDA0mY02o5eR41ucwqrULvSKH4UdmoAHNQkzSBNKI1FACy1zCuJrjrSAeB5NHVqStrGtCxqxCgNCtEUUflQM41zGiZtaGpAGaVt2judKTUSwHKRTxhVARXF+GW7yqHGvsqRE6+e9Zt2m7G3UzBGzozKdCAVjc5TudI06CtT4jYz23WSJESCQR5EaiqkOJiyQmKV1K7XNWDKNJaNc3lNc2RVK0b45ScaX/DHeJYdwxDKyt0IO06E+NNBhmPdUEmdAAfQRvW3Y7ivDEYB7qM7QNBmidRmYCFGu5POmmK4lg7PeD2kHLKVZj5RJNLlJaobaZldngeJYwli5JjUoVHqYAqxcP7DXHIN5wgGuVSGb9PnUzd7c4UHQXnHVVCg/7iPlUPxDt47SthBbB/GxDuB4ACAfWncn+Ctlga3huHWn/FcdGVBPfkiAx6ATNaFbZGReWg+VYdwjg17EPnIYBt3cnbwnUmtnwFsLbQDYKB6CKvGq0RkFW0NGVpob6aCaIBFa0Zle7c9n2xlm2qDVXUnaMrMEc97Q5VYtH8tZzxviLJiTespFuywtoADkRIKJJGiyCY8TzrcLlwaIrCTEdYJ7xHumoji9q3bsfZW7aqjNlZQAASRMnqSeZ1rCXyIxTKjByaRnQufYogdQpdpZCD3WMe05XQ5XKyBoVaNtYvEcTcwM2kiQN5UKgJk6jKBA9/WZnhnZvEYm/lvs32SEZ3JkMo2RerHcnlueUn7Rdj2s3Lj2SrWwZCbOoJ0WSIYchJHIGd6hyR7Px5/HxVHz7KRxhct/7ZlDi4srOysAFjxKgKY/mHSrX2P4jetEhYY3CqDMYgw7AQdxCkfRp5/g437FtXvZGR1Z4UNAIICq3IjadQdNIGs92e7OrhLT52zvuWMbCcioI00PqTrtV/dHhV7PNzxi8j49WWvh2JFxAHQI/Mb6g/I0247hLd4CzeZUUqSjZgrZtjlnXQEac58KLh8QBbLucoUSzHkoEsT5Cq12+nEYe3dQBrYzS2uaWGXVY2BA9/Kpx5HKO9mSjUtEFxbsHeBP2VxLgj8XdjoddJHhVb4h2YxIMBFPKVKxp9fCgw3HLthSiZSsmAyzlkzCkaxM/GpK320WALlgSBqUY6wAPZcb7nemlJdGrb8lbu8MvpvbIHiR6DWn+A7LYq9qtrKD+J2CLt46j0qSftlbUZrWG7/8V0zHki7+opVP2gvGlgM2xLOYB8FVdvfTufomxXCfs/ca3LyjwQFjryBMfKptuE2MDh2vMklGDISZd2g5Fn8C82gbLVWudusU232aDX2E19WYimeHxV6+6i47vncAZmLDWfw7bn0NJxl5ZSTNwtIGh+bKDrEaiaH7LXXbw60uggAEyQAJ01gbwKGa3OZjcWpPdEEbyaLcQqf0p4kHTrzJrio2ygzVCI5qTzQaWdI03pIr8KkYrNArRRVauJpMNEmy1wWaNEkmjgVYBMlCaNRYoEcBXGhjSgC0DB2pxbxAPnTdqIKAHF5xTS4UbRoIPJhIoyiaTewNalgiHx/ZTBXdXsoD1WUP9MVDXf2cYM+yXX/UTVtt2pIHWjvbymKVIfJ+ymJ+zzDrsM3mzVI4XshbT2Utr4kSfjVkArgafFByYxs8IRdzPgNBT5QFEDlQNXZaEKwGaaa8Qxi2UZ22G2hOp0UGNgTAnbWnJoty2GkEAg6EESCPEUP8BVezN/8AE1pMRYaLjvbDNCgw5cOCUmcoh2EE8hrOtKcS7Z/aLdy2mynRCWWQ6we9lJAEEagmovtPgWtYgk91Vl1Cwc4BBAhQCIlTG2nrWMPcCNcWGzNJ3lSNYBWd2JUTOgY1zPHGXaOv9Ni4Hxuxda1ZRxBXMJ0ZyFzt3TrJgkjoD0p99qjO+Yg5jlKyNBtBrCxxLEK2fO6XNGU5pIO4ifZ0I08q65xJ3l2gudWZjmYnn9a7e6k8G7INW4FxBL1hzbaStwBupVfZMdDuD51J8R4tbS05zIXC6IXUM0CSAD+KNQKxSzxF1aZmd4AU5TuunLb0pW7xFiJUBOpGpHyg+NJYKeht2XXiPai46OuUJbPdyjV20JILzAzAbDYHxmrV2buLewmiQmd1CnWVmdv9URrtWRC47skKRLaKJPUKTJ1Mc961zshhFw+FALzMuw0KIToVAXWQF1B5g1tCPHSJn0QvFexdi5JQtbOui6rr/KfyNV67+zy5oEvIdT7SsvyzVqYtB1LKwPTeJ5AmPhSaYdydgOQ16fLnWnEz5MyR+wGJDEZ7X+9/+FDb/Z7ieb2VWeTOfhkrUPuVwk6kGecGefTSlbdlxII7u86emms06DmZ9Z7ACBnvk67Ikee7GrPwns7YtFcqZmWId+8wjmOQPkKnvurSBtOuunKduVKYbDvqcug36z0iNaXEHJj0NQzSKlpiJnodR1mlcYhWIfpvAjzNWQHUx9CguOARPPnFFNvujNudQfCNIPnSmCsZlMExMDMvMbkA0AI4g6BTEiZPy+FNnWpTEYGdm18efnTK7hmHL686TQIZkc6EmjAQaDLSsKolqNQKNaNNUBxMVxNDFAKkAI1rhRooBQARztQNQsaI6yImOhFAAZ6VyToKqrdrbKE55gE6qIGkcyY3nTlFW3heIS5bW4pkNsdD4ciRUY5qfRUoSj2hTD4fKZO/yppiT3jTs4pCxUMpYbqGBYeY3FMcQwPOtGTT8hkuA79KErTTNS9p6SYNA9KNFNbmMAcr0pRMQp2osKDutGNEzg100AVjG4Vb97E2WgNCXLVwAZkZVVWUAEEnvT5N4A1U8b2Gu2pNu+C+ae+hQxImSC07D49akO1OJdLzuhyMj6EaEEZUBPMgiZ0Mg7GlOH/tADIBibQd/wCK3BzamJRvZMAHfWdhtXPvdHQ1JJUVd+xWJaZa2B1ljGnIZRrp8qiMRwG/b9tCQDGYEFdekEk+lXQ9u8MzEHDuB10P9I/U04sdssEdwwPT7Mkjp19aOU14C/ZQLPC7rewjGeneM7ctZqYwfYfEsmbIqD/9D3jr/TuTr0qy2+3WGzZf3gHXIIjr3aUxXbzDKsoly63IRkUf5mbUDbZTRcwv0g3CuD2cBb+3vZWNsEhtRLEABEB3OkAxPePKlewONa6l1GJJzlyCTC59RlB27yt7iKo3FuN3MU4a5ED2bY9hJjadZIEknU+AgCwfs3creKwTmRgx13UoQTJ8Y99VFOPY5K4s0620e6m/D7dwq7N3VzbcyTqT4D50qHoTdCDMxyrG5B8htWyZzNCd5nDoMpI1UkTqDG466U7fAMLbBCFMGF895M7+NM7ePb2tSNwwZIPrTu7ildcquWOhOUyAPEjTeqAbWbhK5mnMO7qOXWkrF10dhMo2p8PZAAHL8XhoKMo0IoAKmx0JYksfYbIwMq0SRrqD5/nTsXGaCxBMAGBofd0og0PnXTBobBBLWGVFCqCANhJMeAnl4VJ4C7oV66j86YzNKYRWziPoc6EwaJRJNKMlFNxV500vcSAIUCSdteQ3J6AVQuwMRhRTF7JG/qKlPtldQRs05fEDmPCmruJqWgQutGB+NByohPymqAMW0rhSTHahBqQFmaiTXMaIxpsBHF4tLSF7jhEG7MdOZ+QNRa9pcNcS5kvjuA591ZRtMMp7swM0Ea1Tf2m8Oxd10a2jvby93IGbKxzZ8yjTURBI8j0qHB+B3s2e73EZ1twW/el7oJQqFnKCY7zQDmG86J9GkFG05dDjjXEwznKAE2hdiQZIEgHKvdSOZUtuTVg4FxW5gsMbxukNiBNu3oQFnS4wOzHl/LEzpDRuwrKLj3mySCLYzhzopOdgACeQAP8AN4VDca4UwbDi7f8A3cIjBRDLbXKGImVLBeW01lBxUqvZ158ryxqK0Ltxq5cdrsM7rq+WQM3IsykZR5MDyG+g/wCP8YgCNcmAQC6KWILEh2Md4hQBpprUZxTiS3WC4a01vDJ3FhWYnaWdgDmY7+lRptNdiO6qk94jvEEg+z7tvOtmkjl5zyVF7o0jsZ24uXnNq8iOxHcZQEJb+E65ZIiNtatjYy82gTIPU/2rFMHh2sMt1GzZWVgSIKsplZAPWts7K8c++2A7JD5itxRsCIMqN4IIPrvSq+iJxcXUlsb2rL85nr4zuaWV2BjWpVkgx5U3Nnc+JqaFYWznchVHKSeQ8zUvYwoG/ePU7en613D7IVJG5Ovu0A+frTiqSE2V7tZ2Y+8qzI2V8sEQDmjUCSdDoBNZLj+H3rU5rVxFHdRisKpAEsXg5pPTrWh9suK4mxcJtZchWArIWJhZLKVIIgmDOlN7HaHBPZS5dxDIx0ZCjMytMEdxTKzselYSb5aRuuSirMixLEGddTA66byBy/40lcEnLMRtHwMRz8K2nEcFwt9c2jgiQwRTIOxDAbGoxOw2FDA5rpA/CIC/EExR9q9C0ZemokTtGu3v9KMgg+PKDz8B+da5a7J4MbWJ/wAz3D82qQw/C8PZ762rdv8AnIUR/qbaj7F4HyMp4VwXEXyuRHM/iOlsAHfMdJ3036VqXY/s2uHUu5zOxZWIGgURCrptPPnp0FI4ntRhLf8A11cwSBb78x0Ze6PeRUf2f48+KxLklktqpKWwdJmM1wj2mIJMbCB0BpW29g22mX9EUHalrrpoCuY8hUQHMaHWuvYl0ywRJXnudT+QroTMGh1dv97MWUEfhnalbTDNmygE7wN53quPiHYyVH1tT7CXn/hP/jenYUTF6wu8Uxv2iJIMj4inqZm37vmaI15D3EYMw1JGw8KKAiy/wpVn2NROPuG3dZeW48jrUphEhJcSTsOg8YqaKHCGTA1o9/EhBA35mknvhFJCgch+dQOPx4ALFgoH4m2/ufCn0NIecR4tkU696NzsPE0wwvEc/tz35Z+uQeyo8Cf+6ox7eYiVJPtKjbk8nufwjwpXCYRmeAZB1d9s7dB0QVLbGWrC32cdCVBYjZE/Ci/zHn/YU8s2Z15cqQwNtVXL7z4nrS5v8hsKtEjuaIedG510c6RIRhQjejGuigAs0RhSgFFYajzoARxCswyo6qx5uuYZdiAMw1jn161Qu23BIm7bQu793Rj3WUDLGvdAgEdCBy9nRN/fTPiCooJuKGtqs5cuaDOrRz0b3R4mlKNocXszbtHfd7pDPKdxlJO+RMpGm5JJnyqD7QKFsZiuckQrK5OWeZHSZ/tV/t9oLFy8UNq2lkLlBZEkCSJPIJGUQNtelVnir4BLqm3hg6lyLhuC4VyAgDIpPQkyQToBWEYU7s6OTWmqKlicUbrooGREQIij+UCf9RMknmTSWIeCuup3B6yIB8auuJw2Bsrdexhy7gqF+1zOiq3eZlUtqQYUnl4077P8awlkkraS1iMpIcoAp1PcViTkLAKYOmpFdDkmqJxKUZckVPgPCr+IYi1bLiCGbRUAO5ztAPPSZ08K1DsRwI4SzDsju5zsUnKCYAAb8QAA186ibfaXEYjNZFtizr3SgU5dRmzDQFYPtAiJ51c8DgzYsJbLZyJkxoSSS0DkJMAdKUaNPkuUqckk/C/A98yfDl1jxPnNJum+vj9elH3oL/1+VOzlHfDbgZcp3B+B1pw6VBZ2VpG8mP7+GlSKY2RqIPhQpCaI/tDwv7wmQMFYagkZh4ggEb+dZfxfsfibRJFsun4shNyddIQAMDsdvhWvtiJ6GihwfCk4puy4zklRgP3u9h+4rvZgyVUsiyY1yN5E7b0t/izHAx94MDnktazMCShk1ut7DI4hlVh4gH51HX+zGGf/AKSDyUD5UuI+afaMeftRjCCPvD+4KvLqgBpjFy8Qz57jQNWzu2sEjXbYVs47I2h7IA91ObPZtF/F6LS4D+xIybhnZq7c9sFF5kyG35Dly+tKvnA+DpYGVFMmCTqzEjaTVstcGtrvLeZ0+FOMyW9sq+A3pqJMptjbDYMmC2g6c6j+PM5cZVOVRBI25yPSKcYribMCqAqP4jufIcqiWwxjQsD4EiqslIYEmYyf07R7qe4a7eA7qkc/ZA3OpmKMLTgjvvr/ADt+vj8K57L/AP2P/vb9fqaVjF2s3XEu8DxOkeVPMBZRJKDOx/EZyf7ufkBTaxg7YgtmdonvsY8YE6x40GJ42id3MCdgqD6EUw4sXOEQOXbvuTJY7DplGwAoLtzXvMFG5JPKonEcYJ7q6t06eZ5U0xttFAN0s7NsmwJ/ydOpafLaS/RVULY/jtjNDXkCbDUx6jSixZvZXVkYrORlKtkJEZgDIzeJFK2+A33AaVtAiAAisQPAMIHvBPltXYX9nloEs1xyx1JCW1P9K0mmxWiDxuISwSGfMvtFFJe7dfrdc+yk8ttAP5aluCW7z991yltlGyLyUfmamsB2MsWjmBLmZGcLAPUKoAnx3qYGDjamohyRHojRSgt08GH8KbYh2BgFR75PwmKoSdj8UBNFb1oTUkhifjQM3OkSdfL6+vOjHWgBSa5vy+vyojOa6dDRYNBg23lSTjMSDqIgg7ayKF23+vrajIv6/CgEVXiXZNPaR8kkboGAkxvIMa+NVnFcBe0WzlHyORI3jrEaDl/atJxTwsEHWdYmNN49/wAKp/EsE10n7O8hncFiD7xBrOUV4NYyb7Kpj7+6ZSNspSYbeAQBpMNp4Ujw3DK1xBEgnnrtyI1120qe/wAE3nILXUA695vmNqmeGcBw+GZHfEh2UghbaiSRqAd+Y5xtSjBpnSs0Y43FbbJKzgBhzFvuroHIO0QcsnlJg+VSl3iyHQHQaa845+/86gOJcQLAKoKJyBYszbRmJ8/ZGmnPSoz7TlPl7hNXJ+jkSvsuVvFKRIPX8qNiLoka/RqopdIWZ5H5U7+8FhE67fIRRYuJMJiBHKdPlrS9p5BJ86qqYkiVmDI1+H51IYbFGN6VjonpHTkfzoiNBj66UwtYzrT/AAdgmHaQOQ6+dNbJYvh2ZmUctSdOQApQOZO0U5VlCmNKZZtaoQ7ExNM3xLgxt7qWD6UTEANrsfChghu9wk6kx50nk3o7gjl/fnpSQuax9fW9IYRkg+etBkrmfvcug9NJomKv5EJ2MRsT8BQxoFlAEkgeJ091RWP7QWk0TvsOg0H6/WtQnFHdx7YbqS6ALrtlB0pjhsC34Ua4eiiF8y509J8qmx0OMRxK9e5wvQaRR1wuRZZsk8zq39j50hjbT2yudhm0K200j4yT8ac2cG7lUy5rrAkJ+G2hHtMZ3JMa86dDsTw2NKRkQAnUayxknVmjoDJ5eMgVc+AcDg/eL8FzqAdAo5aHYa6D37k1Dg2cNoB9reH+1T6dddt9dOR8PxC5cz3LrkIvJdJPSd25aT0qkarDKSt6LpdxaLuZ8tajMd2ls25BInpOv+1ZNUTH8Tu3CQCUTkq6aeLDU/LwprYwk0cjWPxYrcmWXG9t3Mi1bE/xP/xBM+oqGxPHsfd0F0IOeRF18DmBMUvhsEOlSVjAjpRsbWOPSIXDXceBAuoR0KBf+39KnbWHe6AbmYMBrku3FU+MAgT7qksNgh0p6bEU6MZZVekOQTMVxf68N6Bj9fXupK6SFPlp7yKTOY6w5JMnmdPfA+AHrSymkLOpnkJA923ypQHX66UhikyaDkPWk3fXwA/OPyNA76nwED4f8hTQmHTbzM0YvA+vSiLyPhSdwTv5e4xNDBCy3BAGm3xPX12qMx3DEuboPQU8X86Ft4j4+A/WpZS0Vq9wULsvLaPAikvurgiRpv6z/arSY85/KkHQGdNvr9KVDsqWIBzL00+BX9KQjVR4x6x/erJjMGDynl84qOxOE6fQ5flUsqLGaNp3tfoCjWm7/gSfkp5eVGu2ND7/ANfmPjQIneHUD5gEfKhAKPhwxknmfUEfkPlQIAhgbR5ztyoWUk6b68/5j60XLOvgT8vypiFEvnp1+X9qumDxKMgPKBpO+nLwqiI/eykA6SfI6U4t37iH92RG5VttSNR/CdTtNVF0S1ZcGeky1QCcdCznDAAAkiGWCJHQ8ulOrHHLDfj/AKX/AEp3ZNErrQgeNMP/AFiwN3/pf9KQftDbI/dqW8fZHqdefSgKH3Gb+W3I0MqBHnqfSag7PETmObwkj66UjisW9wgsR4ATA1HLn5/+KaTB2309+x19PSpbstKida+Dz5j46frS57wM689dar7XDAPPT1p5ZxJjfaR7hH60xEimFtkzkWTrMCZjyplxfHNaTuLJYET3e7puVJn8utKW8VrHp+fxNdiLaPo6g89RPQ0AU3Co+fN3s/Msssx2MBoaBpqYHiKuHD8G1nDkxFy53mOpaD7OZjqTHuExyoMLw+0j9xAAQNBoDHXqd6mL3eXpO1Ui4vaKbcssDqKksRYi3bH4cgn/ADHUn1J9BTh1DEqRDeoI6j9DS2GeF+zP+ny6etFHVLI2kyCGCp9h8HG4p/8AcOkr/lYj4CmeLxTowgBuREa+9iRHuFFEvI5aQ7t2Y5U/w1nrUTheJE+0g/0n9aq/a7tE7lsPaYoolbhHtEzBQHpO55+W4YyT8ll4z22w2HORP3rgwQnsr5vsfITTrhfau1fTPlZRJBiJDCNDyIIMgg8qyXC2DMEA+Wh/SrVwodzKogbnYmdtZ9+1DYqjR//Z"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>

            <div
              className="duration-30 ease-linear absolute inset-0 transition-all transform translate-x-0 z-20"
              data-carousel-item="active"
            >
              <img
                src="https://media-cdn.greatbritishchefs.com/media/lj5kyamw/img33094.jpg?mode=crop&width=1423&height=711"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>

            <div
              className="duration-40 ease-linear absolute inset-0 transition-all transform translate-x-full z-10"
              data-carousel-item=""
            >
              <img
                src="https://www.biggerbolderbaking.com/wp-content/uploads/2016/02/BBB113-Vanilla-Celebration-Cake-FINAL.jpg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>

            <div
              className="hidden duration-50 ease-linear absolute inset-0 transition-all transform"
              data-carousel-item=""
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOgc80b8OCeIiL-V6P2YAZcXG69U7lKYVrkA&usqp=CAU"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev=""
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next=""
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
