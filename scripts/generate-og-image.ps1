$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$backgroundPath = Join-Path $root "public\images\company\or-integration.jpg"
$logoPath = Join-Path $root "public\images\logo\logo-light.png"
$outputPath = Join-Path $root "public\og-image.jpg"

$canvasWidth = 1200
$canvasHeight = 630
$safeLeft = 80
$safeBottom = 60

$headline = "Operating Room Integration"
$supporting = "Medical infrastructure, surgical video systems & equipment solutions"
$cta = "Plan your next clinical infrastructure project with Medintegro"
$brand = "Medintegro"

$bitmap = New-Object System.Drawing.Bitmap $canvasWidth, $canvasHeight
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

$background = [System.Drawing.Image]::FromFile($backgroundPath)

try {
  $graphics.Clear([System.Drawing.Color]::FromArgb(8, 15, 31))

  $srcRatio = $background.Width / $background.Height
  $destRatio = $canvasWidth / $canvasHeight

  if ($srcRatio -gt $destRatio) {
    $srcHeight = $background.Height
    $srcWidth = [int]([math]::Round($srcHeight * $destRatio))
    $srcX = [int](($background.Width - $srcWidth) / 2)
    $srcY = 0
  } else {
    $srcWidth = $background.Width
    $srcHeight = [int]([math]::Round($srcWidth / $destRatio))
    $srcX = 0
    $srcY = [int](($background.Height - $srcHeight) / 2)
  }

  $destRect = New-Object System.Drawing.Rectangle 0, 0, $canvasWidth, $canvasHeight
  $srcRect = New-Object System.Drawing.Rectangle $srcX, $srcY, $srcWidth, $srcHeight
  $graphics.DrawImage($background, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

  $overlayBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    (New-Object System.Drawing.Point 0, 0),
    (New-Object System.Drawing.Point $canvasWidth, $canvasHeight),
    ([System.Drawing.Color]::FromArgb(222, 7, 20, 42)),
    ([System.Drawing.Color]::FromArgb(110, 5, 25, 55))
  )
  $graphics.FillRectangle($overlayBrush, 0, 0, $canvasWidth, $canvasHeight)

  $leftGlow = New-Object System.Drawing.Drawing2D.GraphicsPath
  $leftGlow.AddEllipse(-160, -80, 760, 760)
  $glowBrush = New-Object System.Drawing.Drawing2D.PathGradientBrush($leftGlow)
  $glowBrush.CenterColor = [System.Drawing.Color]::FromArgb(72, 34, 110, 200)
  $glowBrush.SurroundColors = @([System.Drawing.Color]::FromArgb(0, 34, 110, 200))
  $graphics.FillPath($glowBrush, $leftGlow)

  $headlineFont = New-Object System.Drawing.Font("Segoe UI", 42, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
  $supportFont = New-Object System.Drawing.Font("Segoe UI", 20, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
  $ctaFont = New-Object System.Drawing.Font("Segoe UI", 19, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
  $brandFont = New-Object System.Drawing.Font("Segoe UI", 18, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
  $capsFont = New-Object System.Drawing.Font("Segoe UI", 12, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)

  $headlineBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(245, 250, 255))
  $supportBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(210, 224, 239))
  $capsBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(150, 194, 242))
  $lineBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 93, 163, 224))

  $contentWidth = 660
  $contentX = $safeLeft
  $topY = 102

  $graphics.DrawString("MEDINTEGRO", $capsFont, $capsBrush, $contentX, $topY)
  $graphics.FillRectangle($lineBrush, $contentX, ($topY + 32), 116, 4)

  $headlineRect = New-Object System.Drawing.RectangleF($contentX, 158, $contentWidth, 118)
  $graphics.DrawString($headline, $headlineFont, $headlineBrush, $headlineRect)

  $supportRect = New-Object System.Drawing.RectangleF($contentX, 294, 630, 92)
  $graphics.DrawString($supporting, $supportFont, $supportBrush, $supportRect)

  $ctaRect = New-Object System.Drawing.Rectangle 80, 448, 690, 74
  $ctaPath = New-Object System.Drawing.Drawing2D.GraphicsPath
  $radius = 18
  $diameter = $radius * 2
  $ctaPath.AddArc($ctaRect.X, $ctaRect.Y, $diameter, $diameter, 180, 90)
  $ctaPath.AddArc(($ctaRect.Right - $diameter), $ctaRect.Y, $diameter, $diameter, 270, 90)
  $ctaPath.AddArc(($ctaRect.Right - $diameter), ($ctaRect.Bottom - $diameter), $diameter, $diameter, 0, 90)
  $ctaPath.AddArc($ctaRect.X, ($ctaRect.Bottom - $diameter), $diameter, $diameter, 90, 90)
  $ctaPath.CloseFigure()

  $ctaFill = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    (New-Object System.Drawing.Point $ctaRect.X, $ctaRect.Y),
    (New-Object System.Drawing.Point $ctaRect.Right, $ctaRect.Bottom),
    ([System.Drawing.Color]::FromArgb(230, 8, 47, 88)),
    ([System.Drawing.Color]::FromArgb(230, 17, 78, 130))
  )
  $ctaBorder = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(180, 132, 196, 245), 1.5)
  $graphics.FillPath($ctaFill, $ctaPath)
  $graphics.DrawPath($ctaBorder, $ctaPath)

  $ctaTextRect = New-Object System.Drawing.RectangleF(($ctaRect.X + 26), ($ctaRect.Y + 20), ($ctaRect.Width - 52), 34)
  $graphics.DrawString($cta, $ctaFont, $headlineBrush, $ctaTextRect)

  if (Test-Path $logoPath) {
    $logo = [System.Drawing.Image]::FromFile($logoPath)
    try {
      $logoHeight = 56
      $logoWidth = [int]([math]::Round($logo.Width * ($logoHeight / $logo.Height)))
      $logoX = $safeLeft
      $logoY = $canvasHeight - $safeBottom - $logoHeight
      $graphics.DrawImage($logo, $logoX, $logoY, $logoWidth, $logoHeight)
    }
    finally {
      $logo.Dispose()
    }
  } else {
    $graphics.DrawString($brand, $brandFont, $headlineBrush, 80, 552)
  }

  $jpegEncoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.FormatDescription -eq "JPEG" }
  $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
  $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 92L)
  $bitmap.Save($outputPath, $jpegEncoder, $encoderParams)
}
finally {
  $background.Dispose()
  $graphics.Dispose()
  $bitmap.Dispose()
}
