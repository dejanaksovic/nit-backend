# NIT TEST API

# VAZNO

Nije koristena nikakva vrsta enkripicije prilikom kreiranja (registrovanja) korisnika. **NE STAVLJAJTE SIFRE VASIH SENZITIVNIH NALOGA**

## Base URL <br>
https://nit-backend.onrender.com

## Ovaj API je napravljen u svrhu vezbanja koriscena rest api-ja.

Jednostavan api koji cuva informacije korisnika [za dodatne informacije vidi MODEL](####-MODEL) i moguce je dodavati ili brisati korisnike. Svaki odgovor, prilikom greske salje "err" objekat koji u sebi sadrzi poruku o tome sta nije bilo u redu sa proslim zahtevom.

Dejan Aksovic u saradnji sa Dzenanom Kosutom

## Rute

### Uzimanje korisnika
@GET /users <br>
Vraca sve korisnike pristune na serveru <br>
[PROTECTED, JWT VERIFICATION], koristiti bearer token, vraca niz 'users' koji u sebi sadrzi informacije korisnika <br>

@GET /users/id <br>
Vraca korisnika sa zadatim id-em <br>
[PROTECTED, JWT VERIFICATION], koristiti bearer token, vraca 'user' objekat koji sadrzi informacije korisnika, vraca 404 ukoliko korisnik nije pronadjen

### Postavljanje korisnika
@POST /users <br>
Postavlja novog korisnika ili registracija <br>
Svaki korisnik zahteva {name, email, password}. <br>
Kao opcionalne parametre prihvata { residency, desc, imgUrl, ghUrl} <br>
Ukoliko uspesan, vraca objekat 'user' sa kreiranim korisnikom

### Ulogovanje korisnika
@POST /users/login <br>
Logovanje korisnika, zahteva {email, password} -> vraca objekat koji u sebi sadrzi {user} obejkat sa informacijama ulogovanog usera kao i {token} koji se koristi za verfifikaciju

### Brisanje korisnika
@DELETE /users/id
Obrise korisnika sa zadatim emailom <br>
[PROTECTED, JWT VERIFICATION, ADMIN VERIFICATION], koristi bearer token i iz njega gleda da li je ulogovani korisnik admin <br>
Ukoliko korisnik nije pronadjen vraca gresku tipa 404 

#### MODEL
Korisnik u sebi cuva sledece atribute: <br>
{ <br>
    id: Number, _default-autoadded_ <br>
    createdAt: Date, _default-autoadded_ <br>
    name: String, _required-inserted_ <br>
    email: Email, _required-inserted_ <br>
    password: String, _required-inserted_ <br>
    residency: String, _optional-inserted_ <br>
    imgUrl: String, _optional-inserted_ <br>
    ghUrl: String, _optional-inserted_ <br>
    isAdmin: Bool, _default-autoadded_ <br>
}
