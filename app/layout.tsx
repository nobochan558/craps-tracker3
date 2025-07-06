export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <title>クラップス出目トラッカー</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
