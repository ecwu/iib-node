import Link from "next/link";

const mockUrls = [
  // "https://utfs.io/f/ff5vyZQOklo5wM3oo49uqCiVtOdbn83ZUumL7E2D4P5aNypK",
  // "https://utfs.io/f/ff5vyZQOklo5740Z1Pe8dIlRiv1ePzZ6WDsOTQoucg450Lyh",
  // "https://utfs.io/f/ff5vyZQOklo5WvBDsBCp25cgSyAbewhBYr1id6T0JC3HRqon",
  // "https://utfs.io/f/ff5vyZQOklo5Eg8QJfvWbgL9Y5dKJUxfjrBzEiqe7anTsFNu",
  // "https://utfs.io/f/ff5vyZQOklo5sWs5LGEz2CxpAXYD8lSrQBw7ocnViqk1JT6j",
  // "https://utfs.io/f/ff5vyZQOklo5MmAn3WbS8CyisaJPFI1SOuB3tndDkNm2G9Wb",
  // "https://utfs.io/f/ff5vyZQOklo59Tk5tlYbJw5qORsDMFvbVSdhepCjfAUEmlIr",
  // "https://utfs.io/f/ff5vyZQOklo5WQJMF5Cp25cgSyAbewhBYr1id6T0JC3HRqon",
  // "https://utfs.io/f/ff5vyZQOklo5vEVIt7WdxVrSLWJkF6Yu4DUQBapZXyT715cq",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="grid grid-cols-3 gap-4">
        {mockImages.map((image) => (
          <Link key={image.id} href={`/image/${image.id}`}>
            <img src={image.url} alt="image" />
          </Link>
        ))}
      </div>
    </main>
  );
}
