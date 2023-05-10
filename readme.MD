# NIT TEST API

# VAZNO

Nije koristena nikakva vrsta enkripicije prilikom kreiranja (registrovanja) korisnika. **NE STAVLJAJTE SIFRE VASIH SENZITIVNIH NALOGA**

## Base URL <br>
https://nit-backend.onrender.com

## Ovaj API je napravljen u svrhu vezbanja koriscena rest api-ja.

Jednostavan api koji cuva informacije korisnika (ime, imejl i sifru-> POGLEDAJ VAZNO) i moguce je dodavati ili brisati korisnike. Svaki odgovor, prilikom greske salje "err" objekat koji u sebi sadrzi poruku o tome sta nije bilo u redu sa proslim zahtevom

Dejan Aksovic u saradnji sa Dzenanom Kosutom

## Rute

### Uzimanje korisnika
@GET /users <br>
Vraca sve korisnike pristune na serveru [PROTECTED, JWT VERIFICATION], koristiti bearer token, vraca niz 'users' koji u sebi sadrzi informacije korisnika <br>
@GET /users/id <br>
Vraca korisnika sa zadatim emailom [PROTECTED, JWT VERIFICATION], koristiti bearer token, vraca 'user' objekat koji sadrzi informacije korisnika, 404 ukoliko korisnik nije pronadjen

### Postavljanje korisnika
@POST /users <br>
Postavlja novog korisnika ili registracija <br>
Svaki korisnik zahteva ime, imejl i sifra, vraca se objekat 'user' sa kreiranim korisnikom

### Ulogovanje korisnika
@POST /users/login <br>
Logovanje korisnika, zahteva email i sifru -> vraca objekat koji u sebi sadrzi 'user' obejkat sa informacijama kreiranog usera kao i 'token' koji se koristi za verfifikaciju